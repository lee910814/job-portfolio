/*global kakao*/
import React,{useEffect} from 'react';
import styles from './about.module.css';
import Fade from 'react-reveal/Fade';

const About = (props) => {
    const {kakao} = window;
    
    useEffect(() => {
        let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(35.190883, 128.118775), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    // 마커가 표시될 위치입니다 
    //드래그 막기
    map.setDraggable(false);
    //줌 막기
    map.setZoomable(false);
  let markerPosition  = new kakao.maps.LatLng(35.190883, 128.118775); 
    // 마커를 생성합니다
  let marker = new kakao.maps.Marker({
        position: markerPosition
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    }, [])
    return(
        <div className={styles.about}>
              <div id="map" style={{width:'100%',height:'100%'}}></div>  
        </div>
    )
    // return(
    //     <section className={styles.about}>
    //         <Fade right>
    //         <div className={info}>
    //         <h1>이의정</h1>
    //         <p>wantto13@naver.com</p>

    //         </div>
    //         </Fade>
    //     </section>
    // )
}

export default About;