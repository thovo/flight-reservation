import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const projectToken = '723b3d6a25674bfeae1bbeddb15d6628';
const loadPath = `https://cdn.simplelocalize.io/${projectToken}/_latest/{{lng}}`;

// @ts-ignore
i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		detection: {
			order: ['queryString', 'cookie'],
			cache: ['cookie'],
		},
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath,
		},
	});

export default i18n;
