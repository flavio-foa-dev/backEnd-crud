const { ObjectId } = require('mongodb');
const connection = require('./connectionMongo');

const addTasks = async (task, date) => {
  const db = await connection();
  const result = await db.collection('notes').insertOne({ task, date });
  return result;
};

const getTasksAll = async () => {
  const db = await connection();
  const result = await db.collection('notes').find().toArray();
  return result;
};

const getTasksById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const result = await db.collection('notes').findOne({ _id: ObjectId(id) });
  return result;
};

const editTask = async (id, task) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const result = await db.collection('notes').findOneAndUpdate(
    { _id: ObjectId(id) }, { $set: { task } }, { returnOriginal: false },
  );

  return result.value;
};

const destroyTask = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const result = await db.collection('notes').findOneAndDelete({ _id: ObjectId(id) });
  return result;
};

module.exports = {
  addTasks,
  getTasksAll,
  getTasksById,
  editTask,
  destroyTask,
};
