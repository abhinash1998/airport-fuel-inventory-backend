import {
	TransactionRequest,
	TransactionResponse
} from '../interfaces/transaction.interface';
import AIRCRAFT, { AircraftAttributes } from '../models/aircraft.model';
import AIRPORT, { AirportAttributes } from '../models/airport.model';
import TRANSACTION, {
	TransactionAttributes
} from '../models/transaction.model';

export class TransactionBLL {
	/**
	 * This method is used to add new transaction
	 *
	 * @param {TransactionRequest} transactionRequest
	 * @return {*}  {Promise<TransactionAttributes>}
	 * @memberof TransactionBLL
	 */
	async addTransaction(
		transactionRequest: TransactionRequest
	): Promise<TransactionAttributes> {
		try {
			const { transactionType, airport, aircraft, quantity } =
				transactionRequest;

			const airportObj = await AIRPORT.findOne({
				where: {
					airport_name: airport
				}
			});

			const aircraftObj = await AIRCRAFT.findOne({
				where: {
					aircraft_no: aircraft
				}
			});

			const savedTransaction = await TRANSACTION.create({
				transaction_type: transactionType,
				airport_id: airportObj.airport_id,
				aircraft_id: aircraftObj.aircraft_id,
				quantity
			});

			return savedTransaction;
		} catch (error) {
			throw new Error(
				`method : addTransaction class: TransactionBLL Error: ${error}`
			);
		}
	}

	/**
	 * This method is used to fetch list of all transactions
	 *
	 * @return {*}  {Promise<TransactionResponse[]>}
	 * @memberof TransactionBLL
	 */
	async fetchTransactionList(): Promise<TransactionResponse[]> {
		try {
			const transaction: any = await TRANSACTION.findAll({
				attributes: [
					['transaction_id', 'transactionId'],
					['transaction_date_time', 'transactionDate'],
					['transaction_type', 'transactionType'],
					['airport_id', 'airportId'],
					['aircraft_id', 'aircraftId'],
					['quantity', 'quantity']
				],
				raw: true,
				order: [['transaction_date_time', 'DESC']]
			});

			for (const item in transaction) {
				const airportObj = await AIRPORT.findOne({
					where: {
						airport_id: transaction[item].airportId
					}
				});

				const aircraftObj = await AIRCRAFT.findOne({
					where: {
						aircraft_id: transaction[item].aircraftId
					}
				});
				transaction[item]['aircraft'] = aircraftObj.aircraft_no;
				transaction[item]['airport'] = airportObj.airport_name;
				transaction[item]['fuelAvailable'] = airportObj.fuel_available;
			}

			return transaction;
		} catch (error) {
			throw new Error(
				`method : fetchTransactionList class: AirportBLL Error: ${error}`
			);
		}
	}
}
