
import express from 'express';
import { connectToDB } from './db.js';
import dotenv from 'dotenv';

const app = express()
const port = 4000

dotenv.config();

connectToDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.use('/', (req, res) => {
  res.send('Hello World!')
})

