import React from 'react';
import styles from './project1.module.css';
import Fade from 'react-reveal/Fade';

const Project1 = (props) =>{
    return(
        <section className={styles.bucket}>
            <Fade bottom>
            <div className={styles.left}>
                <div className={styles.img}>
                    <img className={styles.pad} src='img/pad.png' alt="pad"/>
                    <img className={styles.bucket_img} src="img/bucket.png" />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.content}>
                    <h1>BUCKET</h1>
                    <p>내가 하고 싶은 걸 하나씩 추가하고 이뤘으면 체크하는 웹사이트입니다.</p>
                    <a href="https://github.com/lee910814/Bucket-List" target="_blank">
                    <button className={styles.right_btn}>→ </button>
                    </a>
                </div>
            </div>
            </Fade>

        </section>
    )
}

export default Project1;