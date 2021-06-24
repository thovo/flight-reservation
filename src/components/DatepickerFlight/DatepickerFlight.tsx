import { useCallback, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as actionTypes from '../../store/actionTypes';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { setDepartureDate, setReturnDate } from '../../store/actionCreators';
import './DatepickerFlight.css';

type Props = {
	action: string;
};

export default function DatepickerFlight(props: Props) {
	const [date, setSelectedDate] = useState(new Date());
	const dispatch: Dispatch<any> = useDispatch();
	const dispatchDate = useCallback(
		(date: Date) => {
			switch (props.action) {
				case actionTypes.SET_DEPARTURE_DATE:
					dispatch(setDepartureDate(date));
					break;
				case actionTypes.SET_RETURN_DATE:
					dispatch(setReturnDate(date));
					break;
				default:
					break;
			}
		},
		[props.action, dispatch]
	);
	const handleChange = (date: Date) => {
		setSelectedDate(date);
		dispatchDate(date);
	};
	return (
		<>
			<DatePicker selected={date} onChange={(date: Date) => handleChange(date)} />
		</>
	);
}
