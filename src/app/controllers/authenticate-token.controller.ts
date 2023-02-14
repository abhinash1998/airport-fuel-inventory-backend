import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { eStatusCode } from '../enum/status-code.enum';
dotenv.config();

export const requireSignin = (req: Request, res: Response, next: any) => {
	const authHeader = req.headers['authorization'];

	if (!authHeader)
		return res
			.status(eStatusCode.UNAUTHORIZED)
			.send({ message: 'Authorization required' });
	else {
		jwt.verify(authHeader, process.env.SECRET_KEY, (err) => {
			if (err)
				return res
					.status(eStatusCode.FORBIDDEN)
					.send({ message: 'Invalid Token or Token expired' });
			next();
		});
	}
};
