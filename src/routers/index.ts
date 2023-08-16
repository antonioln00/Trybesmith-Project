import { Router } from 'express';
import productRouter from './product.router';
import orderRouter from './order.router';

const router = Router();
router.use('/', productRouter);
router.use('/', orderRouter);

export default router;