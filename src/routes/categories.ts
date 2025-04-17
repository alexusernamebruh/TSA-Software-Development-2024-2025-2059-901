import { Router } from 'express';
import { createCategory, getAllCategories } from '../controllers/categories';

const categoriesRouter = Router();
categoriesRouter.post('/', createCategory);
categoriesRouter.get('/', getAllCategories);
export default categoriesRouter;
