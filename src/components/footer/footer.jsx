import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => {
    return(
        <section className={styles.footer}>
                <h2>LEE POTFOLIO</h2> 
           <a href="https://github.com/lee910814" target="_blank">
                <h3>https://github.com/lee910814</h3>
           </a>
        </section>
    )
}

export default Footer;