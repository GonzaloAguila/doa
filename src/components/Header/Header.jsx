import React from 'react';
import styles from './style.module.css';
import background from '../../assets/images/background.jpg';
import logo from '../../assets/images/logo.png';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';
import Hero from '../Hero/Hero';

function Header() {
    const [t, i18n] = useTranslation('header');
    return (
        <div
            className={styles.globalContainer}
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '650px',
                maxWidth: '100%',
            }}
        >
            <div className={styles.container}>
                <div className={styles.firstItem}>
                    <img className={styles.logo} src={logo}></img>
                </div>
                <ul className={styles.secondItem}>
                    <li>{t('navbar.service')}</li>
                    <li>{t('navbar.idioma')}</li>
                    <li>{t('navbar.estrategia')}</li>
                    <li>{t('navbar.software')}</li>
                    <li>{t('navbar.contacto')}</li>
                </ul>
                <ul className={styles.thirdItem}>
                    <Flag onClick={() => i18n.changeLanguage('es')} className={styles.flag} code='esp' height='40'></Flag>
                    <Flag onClick={() => i18n.changeLanguage('en')} className={styles.flag} code='us' height='40'></Flag>
                </ul>
            </div>
            <Hero />
        </div>
    );
}

export default Header;
