import { Router } from 'express';
import airportRouter from './airport.routes';
const router = Router();

router.use('/airport', airportRouter);

export default router;
