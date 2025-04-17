import { Router } from 'express';
import { createRating } from '../controllers/ratings';

const ratingsRouter = Router();
ratingsRouter.post('/', createRating);
export default ratingsRouter;
