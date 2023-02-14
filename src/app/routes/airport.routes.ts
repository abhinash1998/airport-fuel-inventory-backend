import { Router } from 'express';
import {
	addAirport,
	fetchAirportList
} from '../controllers/airport.controller';
import { requireSignin } from '../controllers/authenticate-token.controller';

const airportRouter = Router();

airportRouter.use(requireSignin);

airportRouter.get('/', fetchAirportList);
airportRouter.post('/', addAirport);

export default airportRouter;
