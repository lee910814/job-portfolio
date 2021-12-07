import React from 'react';
import styles from './left.module.css';
import Fade from 'react-reveal/Fade';

const Left = (props) => {
    return(
        <section className={styles.left}>
            <Fade bottom>
            <h1>About</h1>
            </Fade>
        </section>
    )
}

export default Left;