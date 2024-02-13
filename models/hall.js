const mongoose = require("mongoose");

const hallSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    maxcount : {
        type : Number, 
        required : true        
    },
    room_no : {
        type : String,
        required : true
    },
    bookings : []
})

const hallModel = mongoose.model("halls", hallSchema);
module.exports = hallModel