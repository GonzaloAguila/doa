import React from 'react';
import styles from './style.module.css';
import { useTranslation } from 'react-i18next';

import { BsFileCheck, BsBoxArrowRight, BsListUl, BsFileEarmarkDiff, BsGrid3X2GapFill, BsBrush } from 'react-icons/bs';

function Services() {
    const [t, i18n] = useTranslation('services');

    return (
        <div className={styles.container}>
            <div id='servicios' className={styles.toprow}>{t('services.title')}</div>
            <div className={styles.row}>
                <div className={`${styles.card} ${styles.impar}`}>
                    <h3>{t('services.dtp')}</h3>
                    <BsFileCheck className={styles.icon} />
                </div>
                <div className={`${styles.card} ${styles.par}`}>
                    <h3>{t('services.conv')}</h3>
                    <BsBoxArrowRight className={styles.icon} />
                </div>
                <div className={`${styles.card} ${styles.impar}`}>
                    <h3>{t('services.memo')}</h3>
                    <BsListUl className={styles.icon} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={`${styles.card} ${styles.par}`}>
                    <h3>{t('services.prep')}</h3>
                    <BsFileEarmarkDiff className={styles.icon} />
                </div>
                <div className={`${styles.card} ${styles.impar}`}>
                    <h3>{t('services.set')}</h3>
                    <BsGrid3X2GapFill className={styles.icon} />
                </div>
                <div className={`${styles.card} ${styles.par}`}>
                    <h3>{t('services.edi')}</h3>
                    <BsBrush className={styles.icon} />
                </div>
            </div>
           {/*  <div className={styles.bottomrow}>
                <div className={styles.bottomcard}>
                    <h4>134</h4>
                    <h5>Proyectos entregados.</h5>
                </div>
                <div className={styles.bottomcard}>
                    <h4>5</h4>
                    <h5>Años de experiencia.</h5>
                </div>
                <div className={styles.bottomcard}>
                    <h4>42</h4>
                    <h5>Clientes satisfechos.</h5>
                </div>
            </div> */}
            <div id='Software' className={styles.toprow}>Software</div>
        </div>
    );
}

export default Services;
