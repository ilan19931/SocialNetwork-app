require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const serverPort = process.env.SERVER_PORT || 3005;

app.listen(serverPort, (err) => {
  if (!err) {
    console.log("server started on port: " + serverPort);
  } else {
    console.log(err);
  }
});
