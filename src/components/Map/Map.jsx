import React from 'react';
import styles from './style.module.css';
import background from '../../assets/images/globo.png';
import { FaCheckCircle } from 'react-icons/fa';

function Map() {
    return (
        <div
            className={styles.globalContainer}
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                maxWidth: '100%',
                height: '700px',
            }}
        >
            <div className={styles.toprow}>Idiomas</div>
            <div className={styles.contentContainer}>
                <h2 className={styles.contentTitle}>Trabajamos con todos los idiomas del mundo, incluidos:</h2>
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
