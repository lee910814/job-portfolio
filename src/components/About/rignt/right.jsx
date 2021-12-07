/*global kakao*/
import React,{useEffect} from 'react';
import styles from './right.module.css';
import Fade from 'react-reveal/Fade';

const Right = (props) => {
    const {kakao} = window;
    
    useEffect(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(35.19094390430677, 128.1187974681305), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };  
    
    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption); 
    
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();
    
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch('진주시 하대동 대신로 340번길 20', function(result, status) {
    
        // 정상적으로 검색이 완료됐으면 
         if (status === kakao.maps.services.Status.OK) {
    
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });
    
            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">진주시 하대동 대신로 340번길 20</div>'
            });
            infowindow.open(map, marker);
    
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        } 
    });   
    }, [])
    return(
        <div className={styles.right}>
            <Fade bottm>
            <div className={styles.up}>
                <div className={styles.content}>
                    <h2>이의정</h2>
                    <h3>010-9891-1253</h3>
                    <h3>wantto13@naver.com</h3>
                    <h3>https://github.com/lee910814</h3>
                </div>
            </div>
            <div className={styles.down}>
              <div id="map" style={{width:'100%',height:'100%'}}></div>  
            </div>
            </Fade>
        </div>
    )

}

export default Right;