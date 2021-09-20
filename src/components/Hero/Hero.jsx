import React from 'react';
import experience from '../../assets/images/experience.png';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

function Hero() {
    const [t, i18n] = useTranslation('header');

    return (
        <div className={styles.hero}>
            <h2>
                {t('hero.bienvenida')} <span>DOA</span>
            </h2>
            <img src={experience}></img>
            <h3>{t('hero.subtitulo')} </h3>
            <button className={styles.herobtn}>{t('hero.button')}</button>
        </div>
    );
}

export default Hero;
