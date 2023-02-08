import { Request, Response } from 'express';
import { AirportBLL } from '../bll/airport.bll';
import { eErrorMessage } from '../enum/error-message.enum';
import { eStatusCode } from '../enum/status-code.enum';

export const getAllAirport = async (req: Request, res: Response) => {
	try {
		const result = await new AirportBLL().getAllAirport();
		if (result.length) {
			return res.status(eStatusCode.OK).send(result);
		} else {
			return res
				.status(eStatusCode.NOT_FOUND)
				.send(eErrorMessage.NoRecord);
		}
	} catch (error) {
		res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
	}
};
