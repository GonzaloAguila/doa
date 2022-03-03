import React from 'react';
import styles from './style.module.css';
import implementacion from '../../assets/images/implementacion.png';
import calidad from '../../assets/images/calidad.png';
import analisis from '../../assets/images/analisis.png';

function About() {
    return (
        <div className={styles.backg}>
            <div className={styles.container}>
                <h1>Sobre Nosotros</h1>
                <h3>
                    Creemos que la excelencia en el DTP se logra por medio de 3 pilares: <span>Atención personalizada, calidad y velocidad, </span>por lo tanto
                    desde hace más de 8 años nos enfocamos en ellos para brindar un servicio personalizado según la necesidad de cada cliente, rápido y
                    calificado.
                </h3>
                <div className={styles.cardcontainer}>
                    <div className={styles.card}>
                        <img src={implementacion} alt='' />
                        <h1>Analysiss</h1>
                        <h3>We take your project, analyze it and estimate a competitive budget.</h3>
                    </div>
                    <div className={styles.card}>
                        <img  src={analisis} alt='' />
                        <h1>Implementation</h1>
                        <h3>We elevate your project to our experts as required by your industry.</h3>
                    </div>
                    <div className={styles.card}>
                        <img src={calidad} alt='' />
                        <h1>Quality Control</h1>
                        <h3>We pass your file through our quality control to deliver an optimal final product.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
