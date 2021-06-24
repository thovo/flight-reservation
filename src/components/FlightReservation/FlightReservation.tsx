import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../Header/Header';
import { Dispatch } from 'redux';
import { getFlightResults, resetResult } from '../../store/actionCreators';
import FlightResults from '../FlightResults/FlightResults';
import CitiesAutosuggest from '../CitiesAutosuggest/CitiesAutosuggest';
import * as actionTypes from '../../store/actionTypes';
import DatepickerFlight from '../DatepickerFlight/DatepickerFlight';
import { FlightResultsState } from '../../store/type';
import { useState } from 'react';

const StyledButton = styled.button`
	border-radius: 5px;
	background: #78e08f;
	color: white;
	font-size: 16px;
	padding: 10px 15px;
	border: none;
	font-family: 'Roboto', sans-serif;
	cursor: pointer;
	margin-top: 10px;
`;

const FlightSearch = styled.section`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: auto;
	text-align: left;
	max-width: 300px;
	margin: 20px auto;
	align-items: center;
`;

const LabelText = styled.span`
	font-size: 16px;
	font-weight: bold;
	margin: 10px 0;
	color: #1e3799;
`;

function FlightReservation() {
	const { t } = useTranslation();
	const dispatch: Dispatch<any> = useDispatch();
	const searchFlights = useCallback(() => {
		dispatch(resetResult());
		dispatch(getFlightResults());
	}, [dispatch]);

	const [disabledState, setDisabledState] = useState(false);
	// TODO: disabled button based on state
	/*
	const departCity = useSelector((state: FlightResultsState) => state.departCity, shallowEqual);
	const arrivalCity = useSelector((state: FlightResultsState) => state.arrivalCity, shallowEqual);
	const departureDate = useSelector((state: FlightResultsState) => state.departureDate, shallowEqual);
	const isValidData = (): boolean => {
		return !!departCity && !!arrivalCity && !!departureDate;
	};*/
	return (
		<>
			<Header></Header>
			<FlightSearch>
				<LabelText>{t('FROM')}</LabelText>
				<CitiesAutosuggest action={actionTypes.SET_DEPART_CITY}></CitiesAutosuggest>
				<LabelText>{t('TO')}</LabelText>
				<CitiesAutosuggest action={actionTypes.SET_ARRIVAL_CITY}></CitiesAutosuggest>
				<LabelText>{t('DEPART_DATE')}</LabelText>
				<DatepickerFlight action={actionTypes.SET_DEPARTURE_DATE}></DatepickerFlight>
				<StyledButton disabled={disabledState} onClick={searchFlights}>
					{t('BUTTON_SEARCH_FLIGHT')}
				</StyledButton>
			</FlightSearch>

			<FlightResults></FlightResults>
		</>
	);
}

export default FlightReservation;
