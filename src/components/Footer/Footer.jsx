import React from 'react';
import styles from './style.module.css';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.firstrow}>
                <div className={styles.firstcol}>
                    <img src={logo} alt='' />
                </div>
                <div className={styles.secondcol}>
                    <h4>Socialss</h4>
                    <ul className={styles.social}>
                        <FaLinkedin onClick={() =>window.open("https://www.linkedin.com/company/doa-dtpservices/", "_blank")} className={styles.icon}></FaLinkedin>
                        <FaWhatsapp onClick={() =>window.open("https://web.whatsapp.com/send?phone=5493548506301", "_blank")}  className={styles.icon}></FaWhatsapp>
                        <FaInstagram onClick={() =>window.open("https://www.instagram.com/doa.dtpservices/", "_blank")} className={styles.icon}></FaInstagram>
                    </ul>
                </div>
            </div>
            <div className={styles.secondrow}>
                <p>©2021 D.OA.</p>
            </div>
        </div>
    );
}

export default Footer;
