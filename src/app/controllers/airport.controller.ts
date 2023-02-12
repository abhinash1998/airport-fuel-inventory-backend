import { Request, Response } from 'express';
import { AirportBLL } from '../bll/airport.bll';
import { eErrorMessage } from '../enum/error-message.enum';
import { eStatusCode } from '../enum/status-code.enum';

export const addAirport = async (req: Request, res: Response) => {
	try {
		if (!Object.keys(req.body).length) {
			return res
				.status(eStatusCode.BAD_REQUEST)
				.send(eErrorMessage.FieldContent);
		}
		const result = await new AirportBLL().addAirport(req.body);
		if (result) {
			return res.status(eStatusCode.CREATED).send(result);
		} else {
			return res
				.status(eStatusCode.BAD_REQUEST)
				.send('Failed to save Airport');
		}
	} catch (error) {
		return res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
	}
};

export const fetchAirportList = async (req: Request, res: Response) => {
	try {
		const result = await new AirportBLL().fetchAirportList();
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

