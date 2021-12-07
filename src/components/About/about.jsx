import React from 'react';
import styles from './about.module.css';
import Left from './left/left';
import Right from './rignt/right';

const About = (props) =>{
    return(
        <section className={styles.about}>

                <Left/>
                <Right/>
           
        </section>
    )
}

export default About;