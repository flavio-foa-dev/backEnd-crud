const taskService = require('../services/taskService');

const addTasks = async (req, res) => {
  const { task, date } = req.body;
  const result = await taskService.addTasks(task, date);
  return res.status(201).json(result);
};

const getTasksAll = async (_req, res) => {
  const result = await taskService.getTasksAll();
  return res.status(200).json(result);
};

const getTasksById = async (req, res) => {
  const { id } = req.params;
  const result = await taskService.getTasksById(id);
  return res.status(200).json(result);
};

const editTask = async (req, res) => {
  const { id } = req.params;
  const { task, date } = req.body;
  const result = await taskService.editTask(id, task, date);
  return res.status(200).json(result);
};

const destroyTask = async (req, res) => {
  const { id } = req.params;
  const result = await taskService.destroyTask(id);
  return res.status(204).json(result);
};

module.exports = {
  addTasks,
  getTasksAll,
  getTasksById,
  editTask,
  destroyTask,
};
