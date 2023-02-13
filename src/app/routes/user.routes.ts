import { Router } from 'express';
import { signinUser } from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/login', signinUser);

export default userRouter;
