const express = require("express");

const app = express();
const dbConfig = require("./db.js")

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started!"));
