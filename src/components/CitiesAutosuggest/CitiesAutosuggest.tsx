import { useCallback, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { setArrivalCity, setDepartCity } from '../../store/actionCreators';
import * as actionTypes from '../../store/actionTypes';
import './CitiesAutosuggest.css';

type Props = {
	action: string;
};

const cities: string[] = ['Paris', 'Berlin', 'London', 'Rome', 'Milan', 'Lyon', 'Madrid', 'Leipzig'];

export default function CitiesAutosuggest(props: Props) {
	const { t } = useTranslation();
	const [value, setValue] = useState('');
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const getSuggestions = (value: string): string[] => {
		return cities.filter((city) => city.toLowerCase().startsWith(value.trim().toLowerCase()));
	};
	const dispatch: Dispatch<any> = useDispatch();
	const setCity = useCallback(
		(city: string) => {
			switch (props.action) {
				case actionTypes.SET_DEPART_CITY:
					dispatch(setDepartCity(city));
					break;
				case actionTypes.SET_ARRIVAL_CITY:
					dispatch(setArrivalCity(city));
					break;
				default:
					break;
			}
		},
		[props.action, dispatch]
	);

	return (
		<>
			<Autosuggest
				suggestions={suggestions}
				onSuggestionsClearRequested={() => setSuggestions([])}
				onSuggestionsFetchRequested={({ value }) => {
					setValue(value);
					setSuggestions(getSuggestions(value));
				}}
				onSuggestionSelected={(_, { suggestionValue }) => setCity(suggestionValue)}
				getSuggestionValue={(suggestion: string) => suggestion}
				renderSuggestion={(suggestion: string) => <span>{suggestion}</span>}
				inputProps={{
					placeholder: t('TYPE_CITY'),
					value: value,
					onChange: (_, { newValue, method }) => {
						setValue(newValue);
					},
				}}
				highlightFirstSuggestion={true}
			/>
		</>
	);
}
