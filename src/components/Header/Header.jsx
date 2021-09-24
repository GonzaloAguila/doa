import React from 'react';
import styles from './style.module.css';
import background from '../../assets/images/background.jpg';
import logo from '../../assets/images/logo.png';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';
import Hero from '../Hero/Hero';
import { Link } from 'react-scroll';

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
                maxWidth: '100vw',
            }}
        >
            <div className={styles.container}>
                <div className={styles.firstItem}>
                    <img alt='logo' className={styles.logo} src={logo}></img>
                </div>
                <ul className={styles.secondItem}>
                    <Link activeClass='active' spy={true} smooth={true} offset={20} duration={400} to='servicios'>
                        <li>{t('navbar.service')}</li>
                    </Link>
                    <Link activeClass='active' spy={true} smooth={true} offset={20} duration={400} to='idiomas'>
                        <li>{t('navbar.idioma')}</li>
                    </Link>
                    <li>{t('navbar.estrategia')}</li>
                    <Link activeClass='active' spy={true} smooth={true} offset={0} duration={400} to='slider'>
                        <li>{t('navbar.software')}</li>
                    </Link>
                    <Link activeClass='active' spy={true} smooth={true} offset={0} duration={400} to='form'>
                        <li>{t('navbar.contacto')}</li>
                    </Link>
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
