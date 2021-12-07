import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';


const Header = (props) => {
    return(
        <header className={styles.header}>
            <h1 className={styles.logo}>LEE PORTFOLIO</h1>
        </header>
    )
}
            

export default Header;