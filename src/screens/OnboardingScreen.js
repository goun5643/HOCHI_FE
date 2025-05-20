import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleKakaoLogin = () => {
        Alert.alert('카카오 로그인 클릭!');
    };

    const handleGuestLogin = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            {/* 상단 텍스트 */}
            <View style={styles.topTextContainer}>
                <Text style={styles.title}>호서대의 위치 정보를 한 눈에 쏙!</Text>
                <Text style={styles.subtitle}>호치에 오신 걸 환영해요</Text>
            </View>

            {/* 빈 공간 */}
            <View style={styles.flexSpacer} />

            {/* 하단 버튼들 */}
            <View style={styles.bottomContainer}>
                {/* 카카오 이미지 버튼 */}
                <TouchableOpacity onPress={handleKakaoLogin}>
                    <Image
                        source={require('../assets/images/kakao.png')} // 이미지 경로 정확히!
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
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    topTextContainer: {
        marginTop: 60,
    },
    title: {
        color: '#0E66C0',
        fontSize: 43,
        fontWeight: 'bold',
        marginBottom: 10,
        top: 65,
    },
    subtitle: {
        color: '#000',
        fontSize: 18,
        top: 121,
    },
    flexSpacer: {
        flex: 1,
    },
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
