import { Router } from 'express';
import {
  createPlace,
  getPlaceById,
  getPlaces,
  getPlacesByOwnerId,
} from '../controllers/places';

const placesRouter = Router();
placesRouter.post('/', createPlace);

placesRouter.get('/', getPlaces);
placesRouter.get('/getByOwnerId/:ownerId', getPlacesByOwnerId);
placesRouter.get('/:id', getPlaceById);
export default placesRouter;
