const express = require('express');
require('dotenv').config()

const { PORT } = process.env
const app = express();

app.get('/', (req, res) =>{console.log('oi')})

app.listen(PORT, ()=>{
  console.log('listening on port', PORT)
})