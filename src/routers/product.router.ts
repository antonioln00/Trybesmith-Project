import { Router } from 'express';
import { productController } from '../controller';

const productRouter = Router();

productRouter.post('/products', productController.newProduct);
productRouter.get('/products', productController.allProducts);

export default productRouter;