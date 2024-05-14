
import express from 'express';

import { connectToDB } from './db.js';
import { Product } from './models/product.js';

import productRoute from './routes/productRoute.js';

const app = express();

// Middleware
app.use(express.json()); ///Usar JSON
app.use(express.urlencoded({ extended: false }))

import dotenv from 'dotenv';

const port = 3000

dotenv.config(); // Leer .env

connectToDB();

// Routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// CRUD
app.use('/api/products', productRoute)
  
