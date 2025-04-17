import { Router } from 'express';
import usersRouter from './users';
import placesRouter from './places';
import ratingsRouter from './ratings';
import eventsRouter from './events';
import categoriesRouter from './categories';
import aiRouter from './ai';

const baseRouter = Router();
baseRouter.use('/users', usersRouter);
baseRouter.use('/places', placesRouter);
baseRouter.use('/ratings', ratingsRouter);
baseRouter.use('/events', eventsRouter);
baseRouter.use('/categories', categoriesRouter);
baseRouter.use('/ai', aiRouter);
export default baseRouter;
