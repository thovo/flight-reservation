import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { Helmet } from 'react-helmet';

const StyledH1 = styled.h1`
	font-size: 2rem;
	color: #78e08f;
	text-align: center;
`;

function Header() {
	const { t } = useTranslation();
	return (
		<Fragment>
			<Helmet>
				<title>{t('TITLE')}</title>
				<meta name='description' content={t('DESCRIPTION')} />
			</Helmet>
			<StyledH1>{t('TITLE')}</StyledH1>
			<LanguageSwitcher></LanguageSwitcher>
		</Fragment>
	);
}

export default Header;
