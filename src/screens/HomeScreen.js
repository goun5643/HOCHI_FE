// App.js 또는 SchoolMapScreen.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>우리학교 지도</title>
    <style>
      html, body, #map {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
    <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=1076e0ee7add4e38a0426897225a9c1d"></script>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var container = document.getElementById('map');
      var options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울 좌표 (예시)
        level: 3
      };
      var map = new kakao.maps.Map(container, options);

      // 마커 추가 예시
      var markerPosition  = new kakao.maps.LatLng(37.5665, 126.9780); 
      var marker = new kakao.maps.Marker({
          position: markerPosition
      });
      marker.setMap(map);
    </script>
  </body>
  </html>
  `;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView originWhitelist={['*']} source={{ html }} />
    </SafeAreaView>
  );
}
