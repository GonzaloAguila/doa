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
                return (
                    <span>
                       {t('services.tooltips.conversion')}
                    </span>
                );
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
            case 'prep':
                return (
                    <span>
                        {t('services.tooltips.filePrepOne')}
                        <br />
                        <br />
                        <li>{t('services.tooltips.filePrepChildOne')}</li>
                        <li>{t('services.tooltips.filePrepChildTwo')}</li>
                        <li>{t('services.tooltips.filePrepChildThree')}</li>
                        <li>{t('services.tooltips.filePrepChildFour')}</li>
                        <br />
                        {t('services.tooltips.filePrepTwo')}
                    </span>
                );
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
                    <LightTooltip title={servicesText('dtp')}>
                        <h3>{t('services.dtp')}</h3>
                    </LightTooltip>
                    <BsFileCheck className={styles.icon} />
                </div>
                <div className={`${styles.card} ${styles.par}`}>
                    <LightTooltip title={servicesText('conv')}>
                        <h3>{t('services.conv')}</h3>
                    </LightTooltip>
                    <BsBoxArrowRight className={styles.icon} />
                </div>
                <div className={`${styles.card} ${styles.impar}`}>
                    <LightTooltip title={servicesText('memo')}>
                        <h3>{t('services.memo')}</h3>
                    </LightTooltip>
                    <BsListUl className={styles.icon} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={`${styles.card} ${styles.par}`}>
                    <LightTooltip title={servicesText('prep')}>
                        <h3>{t('services.prep')}</h3>
                    </LightTooltip>
                    <BsFileEarmarkDiff className={styles.icon} />
                </div>
                <div className={`${styles.card} ${styles.impar}`}>
                    <LightTooltip title={servicesText('set')}>
                        <h3>{t('services.set')}</h3>
                    </LightTooltip>
                    <BsGrid3X2GapFill className={styles.icon} />
                </div>
                <div className={`${styles.card} ${styles.par}`}>
                    <LightTooltip title={servicesText('image')}>
                        <h3>{t('services.edi')}</h3>
                    </LightTooltip>
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
            <div id='Software' className={styles.toprow}>
                Software
            </div>
        </div>
    );
}

export default Services;
