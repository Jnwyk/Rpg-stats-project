import React from "react";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <div className={styles['footer-container']}>
            <a href="https://github.com/Jnwyk">
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/jan-nowak-678613243/">
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
        </div>
    )
}

export default Footer;