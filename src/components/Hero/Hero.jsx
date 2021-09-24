import React from 'react';
import experience from '../../assets/images/experience.png';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';
import Typewriter from 'typewriter-effect';


function Hero() {
    const [t, i18n] = useTranslation('header');
    const initMessage = t('hero.bienvenida')

    return (
        <div className={styles.hero}>
                <Typewriter 
                  options={{
                    strings: [`${initMessage} DOA!`,],
                    autoStart: true,
                    loop: true,
                    delay: 120
                  }}
                />
            <img alt='logo' src={experience}></img>
            <h3>{t('hero.subtitulo')} </h3>
        </div>
    );
}

export default Hero;
