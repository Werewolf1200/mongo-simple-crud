
import express from 'express';

import { connectToDB } from './db.js';
import { Product } from './models/product.js';

import dotenv from 'dotenv';

const app = express();

app.use(express.json()); ///Usar JSON
const port = 3000

dotenv.config(); // Leer .env

connectToDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Crear Registro
app.post('/api/products', async (req, res) => {
  
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// Leer Registros
app.get('/api/products', async (req, res) => {
  
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// Leer un Registro
app.get('/api/product/:id', async (req, res) => {
  
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// Actualizar un Registro
app.put('/api/product/:id', async (req, res) => {
  
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// Eliminar un Registro
app.delete('/api/product/:id', async (req, res) => {
  
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product Deleted Succesfully" });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})