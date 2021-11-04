const express = require('express');
// const rescue = require('express-rescue');

const taskRouter = express.Router();
const taskController = require('../controllers/taskController');

taskRouter.post('/', taskController.addTasks);
taskRouter.get('/', taskController.getTasksAll);
taskRouter.get('/:id', taskController.getTasksById);
taskRouter.put('/:id', taskController.editTask);
taskRouter.delete('/:id', taskController.destroyTask);

module.exports = taskRouter;
