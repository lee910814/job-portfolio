import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';


const Header = (props) => {
    return(
        <header className={styles.header}>
            <h1 className={styles.logo}>LEE PORTFOLIO</h1>
            <ul className={styles.menu}>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/skills">
                    <li>Skills</li>
                </Link>
                <Link to="/project">
                    <li>Project</li>
                </Link>
            </ul>
        </header>
    )
}
            

export default Header;