import { Router } from 'express';
import { userController } from '../controller';

const userRouter = Router();

userRouter.post('login', userController.login);

export default userRouter;