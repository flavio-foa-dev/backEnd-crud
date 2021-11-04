const taskModel = require('../models/taskModel');

const addTasks = async (task, date) => {
  const result = await taskModel.addTasks(task, date);
  return result;
};

const getTasksAll = async () => {
  const result = await taskModel.getTasksAll();
  return result;
};

const getTasksById = async (id) => {
  const result = await taskModel.getTasksById(id);
  return result;
};

const editTask = async (id, task, date) => {
  const result = await taskModel.editTask(id, task, date);
  return result;
};

const destroyTask = async (id) => {
  const result = await taskModel.destroyTask(id);
  return result;
};

module.exports = {
  addTasks,
  getTasksAll,
  getTasksById,
  editTask,
  destroyTask,
};
