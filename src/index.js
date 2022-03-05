import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import header_en from './utils/translations/en/header.json';
import header_es from './utils/translations/es/header.json';
import about_en from './utils/translations/en/about.json';
import about_es from './utils/translations/es/about.json';
import services_en from './utils/translations/en/services.json';
import services_es from './utils/translations/es/services.json';
import languages_en from './utils/translations/en/languages.json';
import languages_es from './utils/translations/es/languages.json';
import form_en from './utils/translations/en/form.json';
import form_es from './utils/translations/es/form.json';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'es',
    resources: {
        es: {
            header: header_es,
            about: about_es,
            services: services_es,
            languages: languages_es,
            form: form_es,
        },
        en: {
            header: header_en,
            about: about_en,
            services: services_en,
            languages: languages_en,
            form: form_en,
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
