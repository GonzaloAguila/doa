import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next'
import header_en from './utils/translations/en/header.json'
import header_es from './utils/translations/es/header.json'


i18next.init({
  interpolation: {escapeValue: false},
  lng: "es",
  resources: {
    es: {
      header: header_es,

    },
    en: {
      header: header_en
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
     <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
