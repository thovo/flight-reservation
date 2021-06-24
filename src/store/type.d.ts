export interface ITicket {
	id: string;
	flightNumber: string;
	airline: string;
	takeoff: string;
	landing: string;
	duration: number;
	price: number;
	currencyCode: string;
	departureAirport: string;
	arrivalAirport: string;
}

export interface Airlines {
	name: string;
}

export interface Airports {
	city: string;
	name: string;
}

type FlightResultsState = {
	results: ITicket[];
	selectedTicket: ITicket | null;
	departCity: string | null;
	arrivalCity: string | null;
	departureDate: Date | null;
	returnDate: Date | null;
};

type FlightResultsAction = {
	type: string;
	results: ITicket[] | null;
	selectedTicket: ITicket | null;
	departCity?: string | null;
	arrivalCity?: string | null;
	departureDate?: Date | null;
	returnDate?: Date | null;
};

type DispatchType = (args: FlightResultsAction) => FlightResultsAction;
