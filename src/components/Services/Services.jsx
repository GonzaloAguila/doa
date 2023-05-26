import React from 'react';
import styles from './style.module.css';
import { useTranslation } from 'react-i18next';
import { BsFileCheck, BsBoxArrowRight, BsListUl, BsFileEarmarkDiff, BsGrid3X2GapFill, BsBrush } from 'react-icons/bs';
import { tooltipTexts } from '../../utils/tooltips';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';

function Services() {
    const [t, i18n] = useTranslation('services');

    const LightTooltip = styled(({ className, ...props }) => <Tooltip arrow {...props} classes={{ popper: className }} />)(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: '#03445E',
            boxShadow: theme.shadows[2],
            fontSize: 14,
            letterSpacing: 0.5,
            fontWeight: '350',
        },
    }));

    const servicesText = (type) => {
        switch (type) {
            case 'dtp':
                return <span>{t('services.tooltips.dtp')}</span>;
            case 'conv':
                return <span>{t('services.tooltips.conversion')}</span>;
            case 'memo':
                return (
                    <span>
                        {t('services.tooltips.memoOne')}
                        <br></br>
                        {t('services.tooltips.memoTwo')}
                    </span>
                );
            case 'image':
                return (
                    <span>
                        {t('services.tooltips.imageOne')}
                        <br />
                        {t('services.tooltips.imageTwo')}
                    </span>
                );
            case 'prepOne':
                return <span>{t('services.tooltips.filePrepOne')}</span>;
            case 'prepTwo':
                return (
                    <ul style={{margin: '20px 0 20px 20px'}}>
                        <li>{t('services.tooltips.filePrepChildOne')}</li>
                        <li>{t('services.tooltips.filePrepChildTwo')}</li>
                        <li>{t('services.tooltips.filePrepChildThree')}</li>
                        <li>{t('services.tooltips.filePrepChildFour')}</li>
                    </ul>
                );
            case 'prepThree':
                return <span>{t('services.tooltips.filePrepTwo')}</span>;
            case 'set':
                return (
                    <span>
                        {t('services.tooltips.formatOne')}
                        <br />
                        <br />
                        {t('services.tooltips.formatTwo')}
                    </span>
                );
        }
    };

    return (
        <div className={styles.container}>
            <div id='servicios' className={styles.toprow}>
                {t('services.title')}
            </div>
            <div className={styles.row}>
                <div className={`${styles.card} ${styles.impar}`}>
                    <div className={`${styles.cardHeader}`}>
                        <BsFileCheck className={styles.icon} />
                        <h3>{t('services.dtp')}</h3>
                    </div>
                    <div className={`${styles.cardContent}`}>{servicesText('dtp')}</div>
                </div>
                <div className={`${styles.card} ${styles.impar}`}>
                    <div className={`${styles.cardHeader}`}>
                        <BsBoxArrowRight className={styles.icon} />
                        <h3>{t('services.conv')}</h3>
                    </div>
                    <div className={`${styles.cardContent}`}>{servicesText('conv')}</div>
                </div>
            </div>
            <div div className={`${styles.row}`}>
                <div className={`${styles.card} ${styles.impar}`}>
                    <div className={`${styles.cardHeader}`}>
                        <BsListUl className={styles.icon} />
                        <h3>{t('services.memo')}</h3>
                    </div>
                    <div className={`${styles.cardContent}`}>{servicesText('memo')}</div>
                </div>
                <div className={`${styles.card} ${styles.impar}`}>
                    <div className={`${styles.cardHeader}`}>
                        <BsBrush className={styles.icon} />
                        <h3>{t('services.edi')}</h3>
                    </div>
                    <div className={`${styles.cardContent}`}>{servicesText('image')}</div>
                </div>
            </div>
            <div className={`${styles.row} ${styles.bottomRow}`}>
                <div className={`${styles.card} ${styles.impar}`}>
                    <div className={`${styles.cardHeader}`}>
                        <BsGrid3X2GapFill className={styles.icon} />
                        <h3>{t('services.set')}</h3>
                    </div>
                    <div className={`${styles.cardContent}`}>{servicesText('set')}</div>
                </div>

                <div className={`${styles.card} ${styles.impar}`}>
                    <div className={`${styles.cardHeader}`}>
                        <BsFileEarmarkDiff className={styles.icon} />
                        <h3>{t('services.prep')}</h3>
                    </div>
                    <div className={`${styles.cardContent}`}>
                        {servicesText('prepOne')}
                        {servicesText('prepTwo')}
                        {servicesText('prepThree')}
                    </div>
                </div>
            </div>
            <div id='Software' className={styles.toprow}>
                Software
            </div>
        </div>
    );
}

export default Services;
