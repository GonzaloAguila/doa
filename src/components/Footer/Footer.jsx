import React from 'react';
import styles from './style.module.css';
import { FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.firstrow}>
                <div className={styles.firstcol}>
                    <img src={logo} alt='' />
                </div>
                <div className={styles.secondcol}>
                    <h4>Socials</h4>
                    <ul className={styles.social}>
                        <FaLinkedin className={styles.icon}></FaLinkedin>
                        <FaFacebookSquare  className={styles.icon}></FaFacebookSquare>
                        <FaInstagram className={styles.icon}></FaInstagram>
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
