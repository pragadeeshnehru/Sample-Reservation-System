const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const User = require("./models/User.js");
const Hall = require("./models/Hall.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "f23f3hj24vj5iqw";

const userValue = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, async (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    const userDetails = await User.findById(user.id);
    user = {
      ...user,
      userType: userDetails["userType"],
    };
    req.user = user;
    next();
  });
};

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
      userType,
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("not found");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, userType, _id } = await User.findById(userData.id);
      res.json({ name, email, userType, _id });
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.post("/auth", (req, res) => {
  const token = req.body.token;

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid Token" });
    } else {
      return res.status(200).json({ messgae: "Token is valid" });
    }
  });
});

app.post("/submitForm", userValue, async (req, res) => {
  const { hall, date, startTime, finishTime } = req.body;
  const userId = req.user.id;

  try {
    const existingForm = await Hall.findOne({
      hall,
      date,
      $or: [
        {
          $and: [
            { startTime: { $lte: startTime } },
            { finishTime: { $gte: startTime } },
          ],
        },
        {
          $and: [
            { startTime: { $lte: finishTime } },
            { finishTime: { $gte: finishTime } },
          ],
        },
      ],
    });

    if (existingForm) {
      return res.status(400).json({
        error: "Another user has already submitted for the given date and time",
      });
    }

    const userForm = await Hall.create({
      hall,
      department: req.body.department,
      date,
      startTime,
      finishTime,
      purpose: req.body.purpose,
      count: req.body.count,
      audio: req.body.audio,
      userId,
      status: req.body.status,
    });
    res.json(userForm);
  } catch (e) {
    console.error("Error submitting form:", e);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
  console.log(req.user.id);
});

app.get("/bookings", userValue, async (req, res) => {
  try {
    const userID = req.user.id;
    const bookings = await Hall.find({ userId: userID });
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/users", userValue, async (req, res) => {
  if (req.user && req.user.userType === 1) {
    try {
      const bookings = await Hall.aggregate([
        {
          $lookup: {
            from: "users", // Name of the User collection
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: "$user", // Unwind the user array
        },
        {
          $project: {
            hall: 1,
            department: 1,
            date: 1,
            startTime: 1,
            finishTime: 1,
            purpose: 1,
            count: 1,
            audio: 1,
            status: 1,
            userName: "$user.name", // Extract user name
          },
        },
      ]);
      console.log(bookings.userName);
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(403).json({ error: "Forbidden" });
  }
});

app.put("/approve/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Hall.findById(id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not Found" });
    }
    booking.status = "approved";
    await booking.save();
    res.json(booking);
  } catch (error) {
    console.error("Error approving booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000);
