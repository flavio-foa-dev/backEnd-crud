const express = require('express');
require('dotenv').config()

const { PORT } = process.env
const app = express();

const taskRouter = require('./src/routers/taskRouter')

app.get('/', (_req, res) =>{
  res.send('Hello-Word')
})

app.use('/task', taskRouter);

app.listen(PORT, ()=>{
  console.log('listening on port', PORT)
})