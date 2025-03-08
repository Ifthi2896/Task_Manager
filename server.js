//Import Application Requirements
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(
  process.env.PORT,
  console.log(`Server is Running, Port Number is ${process.env.PORT}`)
);
