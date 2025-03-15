//Import Application Requirements
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connected = require("./db/connectMongodb");
const taskRouter = require("./Routes/taskRoutes");

//Middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/tasks", taskRouter);

//Port Listening

const appInitiate = async () => {
  try {
    //Connect DB
    connected(process.env.MONGO_URL);

    //Listen Port to Run Server
    app.listen(
      process.env.PORT,
      console.log(`Server is Running, Port Number is ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error.message);
  }
};

appInitiate();
