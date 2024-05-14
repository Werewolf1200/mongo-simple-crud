import express from 'express';
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.route("/")
    .post(addProduct)
    .get(getProducts);


router.route("/:id")
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct)


export default router;

