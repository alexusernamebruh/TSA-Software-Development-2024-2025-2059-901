import { Router } from 'express';
import { createUser, getUserById, signIn } from '../controllers/users';

const usersRouter = Router();
usersRouter.post('/', createUser);
usersRouter.post('/signIn', signIn);

usersRouter.get('/:id', getUserById);
export default usersRouter;
