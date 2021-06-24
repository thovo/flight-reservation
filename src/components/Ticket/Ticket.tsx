import React, { useState, useCallback } from 'react';
import { ITicket } from '../../store/type';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ReactCardFlip from 'react-card-flip';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { buyTicket } from '../../store/actionCreators';

type Props = {
	ticket: ITicket;
};

const FlightInformation = styled.div`
	display: grid;
	grid-template-columns: 80px 100px 80px;
	grid-template-rows: auto;
	grid-template-areas:
		'takeoff-time duration landing-time'
		'departure-airport . arrival-airport';
	padding: 5px;
`;

const Time = styled.div`
	font-weight: bold;
	font-size: 24px;
	color: #535c68;
`;

const TakeOffTime = styled(Time)`
	grid-area: takeoff-time;
`;

const LandingTime = styled(Time)`
	grid-area: landing-time;
`;

const Duration = styled.div`
	font-size: 14px;
	grid-area: duration;
	color: #eb2f06;
	border-bottom: 2px solid #535c68;
`;

const Airport = styled.div`
	font-weight: bold;
	font-size: 16px;
	color: #95afc0;
`;

const DepartureAirport = styled(Airport)`
	grid-area: departure-airport;
`;

const ArrivalAirport = styled(Airport)`
	grid-area: arrival-airport;
`;

const SelectButton = styled.button`
	border-radius: 5px;
	background: #78e08f;
	color: white;
	font-size: 16px;
	padding: 10px 15px;
	border: none;
	font-family: 'Roboto', sans-serif;
	cursor: pointer;
	grid-column: auto;
	margin: 5px 10px;
`;

const FlightTicket = styled.section`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	box-shadow: 0 1px 3px 0 rgb(37 32 31 / 30%);
	background: white;
	padding: 10px 0;
	margin-bottom: 10px;
	max-width: 300px;
	align-items: center;
`;

const FlightNumber = styled.span`
	text-align: left;
	border-bottom: 2px solid #4a69bd;
	padding: 10px 0;
	flex: 1;
	text-align: center;
	width: 100%;
	grid-column: 1/3;
`;

const FlightDetails = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;
	justify-items: start;
	border-radius: 5px;
	box-shadow: 0 1px 3px 0 rgb(37 32 31 / 30%);
	background: white;
	padding: 10px 0;
	margin-bottom: 10px;
	max-width: 300px;
	width: 300px;
	column-gap: 10px;
	row-gap: 10px;
`;

const Label = styled.span`
	grid-column: 1;
	font-weight: bold;
	padding-left: 10px;
`;

const Value = styled.span`
	grid-column: 2;
`;

function Ticket(props: Props) {
	const ticket = props.ticket;
	const duration = `${Math.floor(ticket.duration / 60)}h${ticket.duration % 60}`;
	const { t } = useTranslation();
	const [isOpenedDetail, toggleView] = useState(false);
	const toggle = useCallback(() => {
		toggleView(!isOpenedDetail);
	}, [isOpenedDetail, toggleView]);
	const dispatch: Dispatch<any> = useDispatch();
	const buySelectedTicket = useCallback(() => {
		dispatch(buyTicket(ticket));
	}, [ticket, dispatch]);
	return (
		<>
			<ReactCardFlip isFlipped={isOpenedDetail} flipDirection='horizontal'>
				<FlightTicket>
					<FlightNumber>
						{t('FLIGHT_NUMBER')}: {ticket.flightNumber}
					</FlightNumber>
					<FlightInformation>
						<TakeOffTime>{ticket.takeoff}</TakeOffTime>
						<Duration>{duration}</Duration>
						<LandingTime>{ticket.landing}</LandingTime>
						<DepartureAirport>{ticket.departureAirport}</DepartureAirport>
						<ArrivalAirport>{ticket.arrivalAirport}</ArrivalAirport>
					</FlightInformation>
					<SelectButton onClick={toggle}>{t('SELECT')}</SelectButton>
				</FlightTicket>

				<FlightDetails>
					<FlightNumber>
						{t('FLIGHT_NUMBER')}: {ticket.flightNumber}
					</FlightNumber>
					<Label>{t('FROM')}:</Label>
					<Value>{ticket.departureAirport}</Value>
					<Label>{t('TO')}:</Label>
					<Value>{ticket.arrivalAirport}</Value>
					<Label>{t('ARRIVAL_TIME')}:</Label>
					<Value>{ticket.takeoff}</Value>
					<Label>{t('DEPARTURE_TIME')}:</Label>
					<Value>{ticket.landing}</Value>
					<Label>{t('PRICE')}:</Label>
					<Value>
						{ticket.price} {ticket.currencyCode}
					</Value>
					<SelectButton onClick={buySelectedTicket}>{t('BUY')}</SelectButton>
					<SelectButton onClick={toggle}>{t('BACK')}</SelectButton>
				</FlightDetails>
			</ReactCardFlip>
		</>
	);
}

export default Ticket;
