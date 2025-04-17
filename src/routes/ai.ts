import { Router } from 'express';
import {
  chat,
  createChat,
  deleteChat,
  getAllChats,
  getChat,
  recommendEvent,
  recommendPlace,
} from '../controllers/ai';

const aiRouter = Router();
aiRouter.post('/', chat);
aiRouter.post('/createChat', createChat);
aiRouter.post('/recommendEvent', recommendEvent);
aiRouter.post('/recommendPlace', recommendPlace);
aiRouter.get('/', getAllChats);
aiRouter.get('/:id', getChat);
aiRouter.delete('/:id', deleteChat);
export default aiRouter;
