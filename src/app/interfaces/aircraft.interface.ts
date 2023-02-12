export interface AircraftResponse extends AircraftRequest {
	aircraftId: number;
}

export interface AircraftRequest {
	aircraft: string;
	airline: string;
	source?: string;
	destination?: string;
}
