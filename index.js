const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { PORT } = process.env;
const app = express();

const taskRouter = require('./src/routers/taskRouter');

app.use(express.json());
// app.use(cors());
app.use('*', cors());

app.use('/task', taskRouter);
app.use((err, _req, res, _next) => res.status(err.status).json(err.message));

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
