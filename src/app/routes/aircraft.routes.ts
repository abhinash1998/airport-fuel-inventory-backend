import { Router } from 'express';
import {
	addAircraft,
	fetchAircraftList
} from '../controllers/aircraft.controller';
import { requireSignin } from '../controllers/authenticate-token.controller';

const aircraftRouter = Router();

aircraftRouter.use(requireSignin);

aircraftRouter.get('/', fetchAircraftList);
aircraftRouter.post('/', addAircraft);

export default aircraftRouter;
