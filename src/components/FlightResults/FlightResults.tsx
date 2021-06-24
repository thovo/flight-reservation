import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FlightResultsState, ITicket } from '../../store/type';
import Ticket from '../Ticket/Ticket';

const FlightResultsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 16px;
`;

function FlightResults() {
	const tickets: readonly ITicket[] = useSelector((state: FlightResultsState) => state.results, shallowEqual);
	return (
		<>
			<FlightResultsWrapper>
				{tickets.map((ticket: ITicket) => {
					return <Ticket ticket={ticket} key={ticket.id}></Ticket>;
				})}
			</FlightResultsWrapper>
		</>
	);
}

export default FlightResults;
