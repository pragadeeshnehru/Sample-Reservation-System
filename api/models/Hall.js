const mongoose = require("mongoose");

const HallSchema = new mongoose.Schema({
    name: String,
    hall_id : { type: String, unique: true },
    checkIn: Number,
    checkOut: Number,
    maxCount : Number,
    photos : [String],
})

const HallModel = mongoose.model("Hall",HallSchema);

module.exports = HallModel;