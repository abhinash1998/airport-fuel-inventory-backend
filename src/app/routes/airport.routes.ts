import { Router } from 'express';
import { getAllAirport } from '../controllers/airport.controller';

const airportRouter = Router();

airportRouter.get('/', getAllAirport);

export default airportRouter;
