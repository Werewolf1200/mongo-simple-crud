import { Product } from "../models/product.js";

// Crear Registro
export const addProduct = async (req, res) => {
  
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Leer Registros
export const getProducts = async (req, res) => {
  
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Leer un Registro
export const getProduct = async (req, res) => {

  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Actualizar un Registro
export const updateProduct = async (req, res) => {
  
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
}

// Eliminar un Registro
export const deleteProduct = async (req, res) => {
  
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
}