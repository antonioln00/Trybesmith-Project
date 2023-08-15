import { Request, Response } from 'express';
import { productService } from '../service';

export const newProduct = async (req: Request, res: Response): Promise<Response> => {
  const getNewProducts = await productService.newProduct(req.body);
  return res.status(201).json(getNewProducts);
};

export const allProducts = async (req: Request, res: Response): Promise<Response> => {
  const getAllProducts = await productService.allProducts();
  return res.status(200).json(getAllProducts);
};

const productController = {
  newProduct,
  allProducts,
};

export default productController;