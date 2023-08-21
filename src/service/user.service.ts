import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';

const secret = process.env.JWT_SECRTE || 'secret';

export const login = async (user: { username: string, password: string }):
Promise<{ status: number, message: string }> => {
  if (!user.username || !user.password) {
    return { status: 400, message: '"username" and "password" are required' };
  }

  const getUser = await UserModel.findOne({ where: { username: user.username } });

  if (!getUser || !bcrypt.hashSync(user.password, getUser.dataValues.password)) {
    return { status: 401, message: 'Username or password invalid' };
  }

  const token = jwt.sign({ id: getUser.dataValues.id, username: user.username }, secret);

  return { status: 200, message: token };
};

const userService = {
  login,
};

export default userService;