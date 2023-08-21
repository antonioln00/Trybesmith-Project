import { Request, Response } from 'express';
import { userService } from '../service';

export const login = async (req: Request, res: Response): Promise<Response> => {
  const getLogin = await userService.login(req.body);
  if (getLogin.status !== 200) {
    return res.status(getLogin.status).send({ message: getLogin.message });
  }
  return res.status(getLogin.status).json({ token: getLogin.message });
};

const userController = {
  login,
};

export default userController;