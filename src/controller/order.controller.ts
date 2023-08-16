import { Request, Response } from 'express';
import { orderService } from '../service';

export const allOrders = async (_req: Request, res: Response): Promise<Response> => {
  const getAllOrders = await orderService.allOrders();
  return res.status(200).json(getAllOrders);
};

const orderController = {
  allOrders,
};

export default orderController;