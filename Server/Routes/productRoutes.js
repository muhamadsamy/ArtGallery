import { Router } from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../Controllers/productController.js";
import upload from "./Server/MiddleWares/update.js";

const router = Router();

router.post('/products', upload.single('Image'), createProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', upload.single('Image'), updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;