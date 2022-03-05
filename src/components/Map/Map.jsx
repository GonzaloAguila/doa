import React from 'react';
import styles from './style.module.css';
import background from '../../assets/images/globo.png';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';

function Map() {
    const [t, i18n] = useTranslation('languages');
    return (
        <div
            className={styles.globalContainer}
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '600px',
            }}
        >
            <div id='idiomas' className={styles.toprow}>{t('languages.title')}</div>
            <div className={styles.contentContainer}>
                <h2 className={styles.contentTitle}>{t('languages.main')}</h2>
                <div className={styles.dataContainer}>
                    <div className={styles.card}>
                        <FaCheckCircle className={styles.arrow} />
                        <h3>Western-European​</h3>
                    </div>
                    <div className={styles.card}>
                        <FaCheckCircle className={styles.arrow} />
                        <h3>Bi-Directional languages - Urdu, Arabic, Farsi, Hebrew etc.</h3>
                    </div>
                    <div className={styles.card}>
                        <FaCheckCircle className={styles.arrow} />
                        <h3>Central & East-European languages.</h3>
                    </div>
                    <div className={styles.card}>
                        <FaCheckCircle className={styles.arrow} />
                        <h3>Double-byte Asian languages - CCJK.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;
