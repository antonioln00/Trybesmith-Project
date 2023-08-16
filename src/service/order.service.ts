import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

export const allOrders = async (): Promise<unknown> => {
  const getAllOrders = await OrderModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
  });

  const orderIdProducts = getAllOrders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((product) => product.id) || [],
  }));

  console.log(orderIdProducts);
  
  return orderIdProducts;
};

const orderService = {
  allOrders,
};

export default orderService;