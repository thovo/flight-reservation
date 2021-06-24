import React, { Component } from 'react';
import PropTypes from 'prop-types';

interface AutocompleteProps {
	suggestions: string[];
}

interface AutocompleteState {
	activeSuggestion: number;
	filteredSuggestions: string[];
	showSuggestions: boolean;
	userInput: string;
}

class Autocomplete extends Component<AutocompleteProps, AutocompleteState> {
	static propTypes = {
		suggestions: PropTypes.instanceOf(Array),
	};

	static defaultProps = {
		suggestions: [],
	};

	constructor(props: AutocompleteProps) {
		super(props);

		this.state = {
			// The active selection's index
			activeSuggestion: 0,
			// The suggestions that match the user's input
			filteredSuggestions: [],
			// Whether or not the suggestion list is shown
			showSuggestions: false,
			// What the user has entered
			userInput: '',
		};
	}

	onChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { suggestions } = this.props;
		const userInput = (e.currentTarget as HTMLInputElement).value;

		// Filter our suggestions that don't contain the user's input
		const filteredSuggestions = suggestions.filter(
			(suggestion: string) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
		);

		this.setState({
			activeSuggestion: 0,
			filteredSuggestions,
			showSuggestions: true,
			userInput,
		});
	}

	onClick(e: React.MouseEvent<Element, MouseEvent>) {
		this.setState({
			activeSuggestion: 0,
			filteredSuggestions: [],
			showSuggestions: false,
			userInput: (e.currentTarget as HTMLInputElement).innerText,
		});
	}

	onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		const { activeSuggestion, filteredSuggestions } = this.state;

		// User pressed the enter key
		if (e.key === 'Enter') {
			this.setState({
				activeSuggestion: 0,
				showSuggestions: false,
				userInput: filteredSuggestions[activeSuggestion],
			});
		}
		// User pressed the up arrow
		else if (e.key === 'ArrowUp') {
			if (activeSuggestion === 0) {
				return;
			}

			this.setState({ activeSuggestion: activeSuggestion - 1 });
		}
		// User pressed the down arrow
		else if (e.key === 'ArrowDown') {
			if (activeSuggestion - 1 === filteredSuggestions.length) {
				return;
			}

			this.setState({ activeSuggestion: activeSuggestion + 1 });
		}
	}

	render() {
		const {
			state: { activeSuggestion, filteredSuggestions, showSuggestions, userInput },
		} = this;

		let suggestionsListComponent;

		if (showSuggestions && userInput) {
			if (filteredSuggestions.length) {
				suggestionsListComponent = (
					<ul className='suggestions'>
						{filteredSuggestions.map((suggestion, index) => {
							let className;

							// Flag the active suggestion with a class
							if (index === activeSuggestion) {
								className = 'suggestion-active';
							}

							return (
								<li className={className} key={suggestion} onClick={(e) => this.onClick(e)}>
									{suggestion}
								</li>
							);
						})}
					</ul>
				);
			} else {
				suggestionsListComponent = (
					<div className='no-suggestions'>
						<em>No suggestions, you're on your own!</em>
					</div>
				);
			}
		}

		return (
			<>
				<input
					type='text'
					onChange={(e) => this.onChange(e)}
					onKeyDown={(e) => this.onKeyDown(e)}
					value={userInput}
				/>
				{suggestionsListComponent}
			</>
		);
	}
}

export default Autocomplete;
