const express = require("express");
const router = express.Router();

const Hall = require("../models/hall");

router.get("/getallhalls", async (req, res) => {
  try {
    const halls = await Hall.find({});
    res.send(halls);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
