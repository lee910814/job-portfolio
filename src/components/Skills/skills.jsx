import React from 'react';
import styles from './skills.module.css';
import Fade from 'react-reveal/Fade';

const Skills = (props) => {
   
    return(
        <section className={styles.skills}>
            <Fade bottom>
                <div className={styles.front}>
                    <h1> front-skiils</h1>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <img src="./img/html.png"/>
                        </div>
                        <div className={styles.card}>
                        <img src="./img/css.png"/>
                        </div>
                        <div className={styles.card}>
                        <img src="./img/javascript.png"/>
                        </div>
                        <div className={styles.card}>
                        <img src="./img/react.png"/>
                        </div>
                    </div>
                </div>
                <div className={styles.back}>
                    <h1>back-skills</h1>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <img src="./img/java.png"/>
                        </div>
                        <div className={styles.card}>
                        <img src="./img/mysql.png"/>
                        </div>
                        <div className={styles.card}>
                        <img src="./img/spring.png"/>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    )
}

export default Skills;