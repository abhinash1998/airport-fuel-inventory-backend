import { Router } from 'express';
import aircraftRouter from './aircraft.routes';
import airportRouter from './airport.routes';
import transactionRouter from './transaction.routes';
import userRouter from './user.routes';
const router = Router();

router.use('/airport', airportRouter);
router.use('/aircraft', aircraftRouter);
router.use('/user', userRouter);
router.use('/transaction', transactionRouter);

export default router;
