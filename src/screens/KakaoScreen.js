import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { login, getProfile } from '@react-native-seoul/kakao-login';

export default function KakaoScreen() {
    const handleKakaoLogin = async () => {
        try {
            const token = await login(); // 👉 로그인 창 호출됨
            console.log('AccessToken:', token.accessToken);

            const profile = await getProfile(); // 👉 로그인 후 사용자 정보
            console.log('Profile:', profile);

            Alert.alert('로그인 성공', `${profile.nickname}님 환영합니다!`);
        } catch (error) {
            console.error('카카오 로그인 실패:', error);
            Alert.alert('로그인 실패', '다시 시도해주세요.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>카카오 로그인 화면</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={handleKakaoLogin}>
                <Text style={styles.loginText}>카카오 로그인</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    text: { fontSize: 24, marginBottom: 20 },
    loginBtn: {
        backgroundColor: '#FEE500',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 6,
    },
    loginText: { color: '#000', fontWeight: 'bold', fontSize: 18 },
});
