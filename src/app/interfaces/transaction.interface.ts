export interface TransactionResponse extends TransactionRequest {
	transactionId: number;
	transactionDate: Date;
	airportId: number;
	aircraftId: number;
	fuelAvailable: number;
}

export interface TransactionRequest {
	transactionType: string;
	airport: string;
	aircraft: string;
	quantity: number;
}
