const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://pragadeeshnehru:7917145518jla@cluster0.l5eiz8h.mongodb.net/seminarhalls";

mongoose.connect(mongoURL);
var connection = mongoose.connection;

connection.on("error", () => {
  console.log("DB Connection Failed");
});

connection.on("connected", () => {
  console.log("DB Connection Sucessful");
});

module.exports = mongoose;
