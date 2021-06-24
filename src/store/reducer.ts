import * as actionTypes from './actionTypes';
import { FlightResultsAction, FlightResultsState, ITicket } from './type';

const initialFlightResultsState: FlightResultsState = {
	results: [],
	selectedTicket: null,
	departCity: '',
	arrivalCity: '',
	departureDate: null,
	returnDate: null,
};

const mockData: ITicket[] = [
	{
		id: 'flight-1',
		flightNumber: 'AF 456',
		airline: 'AF',
		takeoff: '17:45',
		landing: '20:00',
		duration: 495,
		price: 39999,
		currencyCode: 'EUR',
		departureAirport: 'CDG',
		arrivalAirport: 'JFK',
	},
	{
		id: 'flight-2',
		flightNumber: 'AF 765',
		airline: 'AF',
		takeoff: '19:45',
		landing: '22:00',
		duration: 495,
		price: 39999,
		currencyCode: 'EUR',
		departureAirport: 'CDG',
		arrivalAirport: 'JFK',
	},
	{
		id: 'flight-3',
		flightNumber: 'LH 123',
		airline: 'LH',
		takeoff: '12:00',
		landing: '14:30',
		duration: 510,
		price: 41000,
		currencyCode: 'EUR',
		departureAirport: 'ORY',
		arrivalAirport: 'JFK',
	},
];

const reducer = (
	state: FlightResultsState = initialFlightResultsState,
	action: FlightResultsAction
): FlightResultsState => {
	switch (action.type) {
		case actionTypes.GET_FLIGHT_RESULTS:
			const newData: ITicket[] = [...mockData];
			return {
				...state,
				results: [...newData],
			};

		case actionTypes.RESET_FLIGHT_RESULTS:
			return {
				...state,
				results: [],
				selectedTicket: null,
			};

		case actionTypes.SELECT_FLIGHT_TICKET:
			const ticket: ITicket | null = action.selectedTicket;
			return {
				...state,
				selectedTicket: ticket,
			};
		case actionTypes.SET_DEPART_CITY:
			const departCity = action.departCity ? action.departCity : '';
			return {
				...state,
				departCity,
			};
		case actionTypes.SET_ARRIVAL_CITY:
			const arrivalCity = action.arrivalCity ? action.arrivalCity : '';
			return {
				...state,
				arrivalCity,
			};
		case actionTypes.SET_DEPARTURE_DATE:
			const departureDate = action.departureDate ? action.departureDate : null;
			return {
				...state,
				departureDate,
			};
		case actionTypes.SET_RETURN_DATE:
			const returnDate = action.returnDate ? action.returnDate : null;
			return {
				...state,
				returnDate,
			};
		default:
			return state;
	}
};

export default reducer;
