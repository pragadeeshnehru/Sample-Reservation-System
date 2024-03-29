const mongoose = require("mongoose");

const HallSchema = new mongoose.Schema({
  name: String,
  hall_id: String,
  checkIn: Number,
  checkOut: Number,
  maxCount: Number,
  photos: [String],
});

const HallModel = mongoose.model("Hall", HallSchema);

module.exports = HallModel;
