import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './thank.module.css';

const Thank = (props) =>{
    return(
        <section className={styles.thank}>
            <Fade bottom>
            <div className={styles.greeting}><span>thank you</span> for watching</div>
            </Fade>
        </section>
    )
}

export default Thank;