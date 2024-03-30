const mongoose = require("mongoose");
const { USER_LEVELS } = require("../constants");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  userType: {type:Number, enum: Object.values(USER_LEVELS), default: USER_LEVELS.LEVEL_2}
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
