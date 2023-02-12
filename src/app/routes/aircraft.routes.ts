import { Router } from 'express';
import {
	addAircraft,
	fetchAircraftList
} from '../controllers/aircraft.controller';

const aircraftRouter = Router();

aircraftRouter.get('/', fetchAircraftList);
aircraftRouter.post('/', addAircraft);

export default aircraftRouter;
