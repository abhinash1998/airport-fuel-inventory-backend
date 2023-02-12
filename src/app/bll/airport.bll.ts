import AIRPORT, { AirportAttributes } from '../models/airport.model';
import {
	AirportRequest,
	AirportResponse
} from '../interfaces/airport.interface';

export class AirportBLL {
	/**
	 * This method is used to add new airport
	 *
	 * @param {AirportRequest} airportRequest
	 * @return {*}  {Promise<AirportAttributes>}
	 * @memberof AirportBLL
	 */
	async addAirport(
		airportRequest: AirportRequest
	): Promise<AirportAttributes> {
		try {
			const { airport, fuelCapacity, fuelAvailable } = airportRequest;

			const savedAirport = await AIRPORT.create({
				airport_name: airport,
				fuel_capacity: fuelCapacity,
				fuel_available: fuelAvailable
			});

			return savedAirport;
		} catch (error) {
			throw new Error(
				`method : addAirport class: AirportBLL Error: ${error}`
			);
		}
	}

	/**
	 * This method is used to fetch list of all Airports
	 *
	 * @return {*}  {Promise<AirportResponse[]>}
	 * @memberof AirportBLL
	 */
	async fetchAirportList(): Promise<AirportResponse[]> {
		try {
			const airport: any = await AIRPORT.findAll({
				raw: true,
				attributes: [
					['airport_id', 'airportId'],
					['airport_name', 'airport'],
					['fuel_capacity', 'fuelCapacity'],
					['fuel_available', 'fuelAvailable']
				],
				order: [['airport_name', 'ASC']]
			});
			return airport;
		} catch (error) {
			throw new Error(
				`method : fetchAirportList class: AirportBLL Error: ${error}`
			);
		}
	}
}
