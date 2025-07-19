// screens/OnboardingScreen.js

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleKakaoLogin = () => {
        navigation.navigate('KakaoScreen');
    };

    const handleGuestLogin = () => {
        navigation.navigate('GuestLoginScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.topTextContainer}>
                <Text style={styles.title}>호서대의 위치 정보를 한 눈에 쏙!</Text>
                <Text style={styles.subtitle}>호치에 오신 걸 환영해요</Text>
            </View>

            <View style={styles.flexSpacer} />

            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={handleKakaoLogin}>
                    <Image
                        source={require('../assets/images/kakao.png')}
                        style={styles.kakaoImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleGuestLogin}>
                    <Text style={styles.guestLoginText}>비회원 로그인</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    topTextContainer: { marginTop: 60 },
    title: {
        color: '#0E66C0',
        fontSize: 43,
        fontWeight: 'bold',
        marginBottom: 10,
        top: 65,
    },
    subtitle: { color: '#000', fontSize: 18, top: 121 },
    flexSpacer: { flex: 1 },
    bottomContainer: {
        marginBottom: 40,
        alignItems: 'center',
    },
    kakaoImage: {
        width: 207,
        height: 51,
        marginBottom: 20,
    },
    guestLoginText: {
        color: '#000000',
        fontSize: 18,
    },
});
