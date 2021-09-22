import React from 'react';
import styles from './style.module.css';
import { BsFileCheck, BsBoxArrowRight, BsListUl, BsFileEarmarkDiff, BsGrid3X2GapFill, BsBrush } from 'react-icons/bs';

function Services() {
    return (
        <div className={styles.container}>
            <div className={styles.toprow}>Servicios</div>
            <div className={styles.row}>
                <div className={`${styles.card} ${styles.impar}`}>
                    <h3>DTP Multilenguaje</h3>
                    <BsFileCheck className={styles.icon} />
                </div>
                <div className={`${styles.card} ${styles.par}`}>
                    <h3>Conversion de archivos</h3>
                    <BsBoxArrowRight className={styles.icon} />
                </div>
                <div className={`${styles.card} ${styles.impar}`}>
                    <h3>Memorias de Traduccion</h3>
                    <BsListUl className={styles.icon} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={`${styles.card} ${styles.par}`}>
                    <h3>Preparacion de Archivos</h3>
                    <BsFileEarmarkDiff className={styles.icon} />
                </div>
                <div className={`${styles.card} ${styles.impar}`}>
                    <h3>Seteo y Formateo</h3>
                    <BsGrid3X2GapFill className={styles.icon} />
                </div>
                <div className={`${styles.card} ${styles.par}`}>
                    <h3>Edicion de Imagenes</h3>
                    <BsBrush className={styles.icon} />
                </div>
            </div>
            <div className={styles.bottomrow}>
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
            </div>
        </div>
    );
}

export default Services;
