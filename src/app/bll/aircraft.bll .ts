import {
	AircraftRequest,
	AircraftResponse
} from '../interfaces/aircraft.interface';
import AIRCRAFT, { AircraftAttributes } from '../models/aircraft.model';

export class AircraftBLL {
	/**
	 * This method is used to add Aircraft
	 *
	 * @param {AircraftRequest} aircraftRequest
	 * @return {*}  {Promise<AircraftAttributes>}
	 * @memberof AircraftBLL
	 */
	async addAircraft(
		aircraftRequest: AircraftRequest
	): Promise<AircraftAttributes> {
		try {
			const { aircraft, airline, source, destination } = aircraftRequest;

			const savedAircraft = await AIRCRAFT.create({
				aircraft_no: aircraft,
				airline,
				source,
				destination
			});

			return savedAircraft;
		} catch (error) {
			throw new Error(
				`method : addAircraft class: AircraftBLL Error: ${error}`
			);
		}
	}

	/**
	 * This method is used to fetch list of all aircrafts
	 *
	 * @return {*}  {Promise<AircraftResponse[]>}
	 * @memberof AircraftBLL
	 */
	async fetchAircraftList(): Promise<AircraftResponse[]> {
		try {
			const airport: any = await AIRCRAFT.findAll({
				raw: true,
				attributes: [
					['aircraft_id', 'aircraftId'],
					['aircraft_no', 'aircraft'],
					['airline', 'airline'],
					['source', 'source'],
					['destination', 'destination']
				],
				order: [['aircraft_no', 'ASC']]
			});
			return airport;
		} catch (error) {
			throw new Error(
				`method : fetchAircraftList class: AircraftBLL Error: ${error}`
			);
		}
	}
}
