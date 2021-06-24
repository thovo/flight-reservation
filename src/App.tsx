import React, { Suspense } from 'react';
import './App.css';
import FlightReservation from './components/FlightReservation/FlightReservation';

function App() {
	return (
		<div className='App'>
			<Suspense fallback='loading'>
				<FlightReservation />
			</Suspense>
		</div>
	);
}

export default App;
