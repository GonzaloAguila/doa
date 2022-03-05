import React from 'react';
import styles from './style.module.css';
import implementacion from '../../assets/images/implementacion.png';
import calidad from '../../assets/images/calidad.png';
import analisis from '../../assets/images/analisis.png';
import { useTranslation } from 'react-i18next';

function About() {
    const [t, i18n] = useTranslation('about');

    return (
        <div className={styles.backg}>
            <div className={styles.container}>
                <h1>{t('about.title')}</h1>
                <h3>
                {t('about.main')}
                </h3>
                <div className={styles.cardcontainer}>
                    <div className={styles.card}>
                        <img src={implementacion} alt='' />
                        <h1>{t('about.analysis')}</h1>
                        <h3>{t('about.analysisText')}</h3>
                    </div>
                    <div className={styles.card}>
                        <img  src={analisis} alt='' />
                        <h1>{t('about.implementation')}</h1>
                        <h3>{t('about.implementationText')}</h3>
                    </div>
                    <div className={styles.card}>
                        <img src={calidad} alt='' />
                        <h1>{t('about.quality')}</h1>
                        <h3>{t('about.qualityText')}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
