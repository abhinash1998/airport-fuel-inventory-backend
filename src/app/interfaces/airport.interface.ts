export interface AirportResponse extends AirportRequest {
	airportId: number;
}

export interface AirportRequest {
	airport: string;
	fuelAvailable: number;
	fuelCapacity: number;
}
