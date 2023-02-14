import { Router } from 'express';
import { requireSignin } from '../controllers/authenticate-token.controller';
import {
	addTransaction,
	fetchTransactionList
} from '../controllers/transaction.controller';

const transactionRouter = Router();

transactionRouter.use(requireSignin);

transactionRouter.get('/', fetchTransactionList);
transactionRouter.post('/', addTransaction);

export default transactionRouter;
