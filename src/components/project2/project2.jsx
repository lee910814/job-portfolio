import React from 'react';
import styles from './project2.module.css';
import Fade from 'react-reveal/Fade';

const Project2 = (props) => {
    return(
        <section className={styles.green}>
            <Fade bottom>
            <div className={styles.left}>
                <div className={styles.content}>
                    <h1>Green</h1>
                    <p>환경오염에 대한 경각심을 알았으면 해서 만든 정보공유 웹사이트입니다.</p>
                    <a href="https://github.com/lee910814/green" target="_blank">
                    <button className={styles.left_btn}>←</button>
                    </a>
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className={styles.right}>
                <div className={styles.img}>
                    <img className={styles.green_img} src="img/green.png" alt="green"/>
                </div>
            </div>
            </Fade>
           
        </section>
    )
}

export default Project2;