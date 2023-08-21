import { Router } from 'express';
import productRouter from './product.router';
import orderRouter from './order.router';
import userRouter from './user.router';

const router = Router();
router.use('/', productRouter);
router.use('/', orderRouter);
router.use('/', userRouter);

export default router;