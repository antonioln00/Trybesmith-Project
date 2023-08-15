import ProductModel, { 
  ProductInputtableTypes, 
  ProductSequelizeModel, 
} from '../database/models/product.model';

export const newProduct = async (
  product: ProductInputtableTypes,
): Promise<ProductSequelizeModel> => {
  const getNewProducts = await ProductModel.create(product);
  
  return getNewProducts;
};

export const allProducts = async (): Promise<ProductSequelizeModel[]> => {
  const getAllProducts = await ProductModel.findAll();
  return getAllProducts;
};

const productService = {
  newProduct,
  allProducts,
};

export default productService;