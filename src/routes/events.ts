import { Router } from 'express';
import {
  createEvent,
  getEventById,
  getEvents,
  getEventsByOwnerId,
  signUpForEvent,
  unSignupForEvent,
} from '../controllers/events';

const eventsRouter = Router();
eventsRouter.post('/', createEvent);

eventsRouter.get('/:id', getEventById);
eventsRouter.get('/', getEvents);
eventsRouter.get('/getByOwnerId/:id', getEventsByOwnerId);

eventsRouter.put('/signup', signUpForEvent);
eventsRouter.put('/unSignup', unSignupForEvent)
export default eventsRouter;
