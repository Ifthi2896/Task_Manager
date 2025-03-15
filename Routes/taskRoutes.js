const express = require("express");
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateSingleTask,
  deleteSingleTask,
} = require("../controllers/taskController");
const taskRouter = express.Router();

taskRouter.route("/").get(getAllTasks).post(createTask);
taskRouter
  .route("/:id")
  .get(getSingleTask)
  .patch(updateSingleTask)
  .delete(deleteSingleTask);

module.exports = taskRouter;
