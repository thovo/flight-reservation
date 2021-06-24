import * as actionTypes from './actionTypes';
import { DispatchType, FlightResultsAction } from './type';

export function getFlightResults() {
	const action: FlightResultsAction = {
		type: actionTypes.GET_FLIGHT_RESULTS,
		results: null,
		selectedTicket: null,
	};
	return simulateHttpRequest(action);
}

export function resetResult() {
	const action: FlightResultsAction = {
		type: actionTypes.RESET_FLIGHT_RESULTS,
		results: [],
		selectedTicket: null,
	};
	return (dispatch: DispatchType) => dispatch(action);
}

export function simulateHttpRequest(action: FlightResultsAction) {
	return (dispatch: DispatchType) => {
		setTimeout(() => {
			dispatch(action);
		}, 500);
	};
}

export function setDepartCity(departCity: string) {
	const action: FlightResultsAction = {
		type: actionTypes.SET_DEPART_CITY,
		results: [],
		selectedTicket: null,
		departCity,
	};
	return (dispatch: DispatchType) => dispatch(action);
}

export function setArrivalCity(arrivalCity: string) {
	const action: FlightResultsAction = {
		type: actionTypes.SET_ARRIVAL_CITY,
		results: [],
		selectedTicket: null,
		arrivalCity,
	};
	return (dispatch: DispatchType) => dispatch(action);
}

export function setDepartureDate(departureDate: Date) {
	const action: FlightResultsAction = {
		type: actionTypes.SET_DEPARTURE_DATE,
		results: [],
		selectedTicket: null,
		departureDate,
	};
	return (dispatch: DispatchType) => dispatch(action);
}

export function setReturnDate(returnDate: Date) {
	const action: FlightResultsAction = {
		type: actionTypes.SET_RETURN_DATE,
		results: [],
		selectedTicket: null,
		returnDate,
	};
	return (dispatch: DispatchType) => dispatch(action);
}
