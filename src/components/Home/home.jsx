import React from 'react';
import styles from './home.module.css';
import Fade from 'react-reveal/Fade';
import TypeWriterEffect from 'react-typewriter-effect';

const Home = (props) => {
    return(
        <section className={styles.home}>
            <div className={styles.intro}>
            <Fade left >Hello, I'm <span>Euy Jeong</span></Fade>
            </div>
            <div className={styles.text}>
            <Fade right><TypeWriterEffect
                startDelay={1000}
                cursorColor="#fff"
                text="Front-end Developer"
                multiTextDelay={2000}
                typeSpeed={100}
                />
                </Fade>
          
            </div>
        </section>
    )
}

export default Home;