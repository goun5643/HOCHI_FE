import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { KAKAO_JAVASCRIPT_KEY } from '@env';  // ✅ 수정된 부분

const apiKey = KAKAO_JAVASCRIPT_KEY;

// 콘솔로 키 잘 불러오는지 확인
console.log('Kakao Key:', apiKey);

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
    <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}"></script>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var container = document.getElementById('map');
      var options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780),
        level: 3
      };
      var map = new kakao.maps.Map(container, options);
    </script>
  </body>
  </html>
`;

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        source={{ html }}
        javaScriptEnabled={true}
        mixedContentMode="always"
      />
    </SafeAreaView>
  );
}
