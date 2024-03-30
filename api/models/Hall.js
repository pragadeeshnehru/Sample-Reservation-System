const mongoose = require("mongoose");

const HallSchema = new mongoose.Schema({
  hall: { type: String, required: true },
  department: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  finishTime: { type: String, required: true },
  purpose: { type: String, required: true },
  count: { type: Number, required: true },
  audio: { type: Boolean, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, required: true },
});

const HallModel = mongoose.model("Hall", HallSchema);

module.exports = HallModel;
