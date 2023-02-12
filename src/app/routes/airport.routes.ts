import { Router } from 'express';
import {
	addAirport,
	fetchAirportList
} from '../controllers/airport.controller';

const airportRouter = Router();

airportRouter.get('/', fetchAirportList);
airportRouter.post('/', addAirport);

export default airportRouter;
