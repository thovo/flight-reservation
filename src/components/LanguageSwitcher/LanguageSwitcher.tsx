import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const languages = [
	{ language: 'en', name: 'English' },
	{ language: 'fr_FR', name: 'Français' },
];

const ToggleButton = styled.button<{ active: boolean }>`
	background: ${(props) => (props.active ? '#1e3799' : 'transparent')};
	border: none;
	padding: 5px 10px;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	color: ${(props) => (props.active ? 'white' : '#1e3799')};
	cursor: pointer;
`;

const Wrapper = styled.div`
	display: flex;
	border: 1px solid #1e3799;
	text-align: center;
	width: auto;
	max-width: 138px;
	margin: 0 auto;
`;

function LanguageSwitcher() {
	const { i18n } = useTranslation();
	return (
		<Fragment>
			<Wrapper>
				{languages.map((lang) => (
					<ToggleButton
						key={lang.language}
						active={i18n.language === lang.language}
						type='submit'
						onClick={() => i18n.changeLanguage(lang.language)}
					>
						{lang.name}
					</ToggleButton>
				))}
			</Wrapper>
		</Fragment>
	);
}

export default LanguageSwitcher;
