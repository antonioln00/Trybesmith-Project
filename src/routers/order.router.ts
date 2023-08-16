import { Router } from 'express';
import { orderController } from '../controller';

const orderRouter = Router();

orderRouter.get('/orders', orderController.allOrders);

export default orderRouter;