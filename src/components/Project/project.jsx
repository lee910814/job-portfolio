import React from 'react';
import styles from './project.module.css';
import Fade from 'react-reveal/Fade';

const Project = (props) => {
    return(
        <section className={styles.project}>
            <Fade bottom>
            <div className={styles.left}>
                <div className={styles.youtube_intro}>
                    <h1>API를 활용한 비디오 검색 사이트</h1>
                    <p>youtube API를 활용하여 좋아하는 비디오를 검색하여 <br/>볼 수 있는 웹사이트 입니다.</p>
                    <button className={styles.left_btn}>←</button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.img}>
                  <img className={styles.mac} src="img/mac.png" alt="mac"/>
                    <img className={styles.youtube} src="img/youtube.png" alt="youtube"/>
                </div>
            </div>
            </Fade>
        </section>
    )
}

export default Project;