const express = require("express");

const app = express();
const dbConfig = require("./db");
const hallsRoute = require("./routes/hallRoute");

app.use("/api/halls", hallsRoute);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started!"));
