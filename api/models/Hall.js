const mongoose = require("mongoose");

const HallSchema = new mongoose.Schema({
    hall: String,
    department: String,
    date: String,
    startTime: String,
    finishTime: String,
    purpose: String,
    count: Number,
    audio: Boolean,
});

const HallModel = mongoose.model("Hall", HallSchema);

module.exports = HallModel;
