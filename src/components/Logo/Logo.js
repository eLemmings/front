import React from 'react';
import styles from './Logo.module.scss';
import logoIcon from '../../assets/logo.svg';

const Logo = () => (
    <div className={styles.wrapper}>
        <img src={logoIcon} alt="logo" className={styles.icon}></img>
        <p className={styles.projectName}>Lem<span className={styles.accentColor}>Med</span></p> 
    </div>
)

export default Logo;