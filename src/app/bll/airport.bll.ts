import AIRPORT from '../models/airport.model';
import { AirportResponse } from '../interfaces/airport.interface';

export class AirportBLL {
	/**
	 * This method is used to fetch all Airports
	 *
	 * @return {*}  {Promise<AirportResponse[]>}
	 * @memberof AirportBLL
	 */
	async getAllAirport(): Promise<AirportResponse[]> {
		try {
			const airport: any = await AIRPORT.findAll({
				raw: true,
				attributes: [
					['airport_id', 'airportId'],
					['airport_name', 'airportName'],
					['fuel_capacity', 'fuelCapacity'],
					['fuel_available', 'fuelAvailable']
				],
				order: [['airport_name', 'ASC']]
			});
			return airport;
		} catch (error) {
			throw new Error(
				`method : getAllAirport class: AirportBLL Error: ${error}`
			);
		}
	}
}
