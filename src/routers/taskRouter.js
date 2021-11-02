const express = require('express');
const rescue = require('express-rescue');

const taskRouter = express.Router();

taskRouter.get('/',);
taskRouter.get('/:id',);
taskRouter.post('/',);
taskRouter.put('/:id',);
taskRouter.delete('/:id',);

module.exports = taskRouter;