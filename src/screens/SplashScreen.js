import React, { useEffect, useRef } from 'react';
import {
    StyleSheet,
    Animated,
    Dimensions,
    ToastAndroid,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    const bounceAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // 로고 위아래로 튕기는 애니메이션
        Animated.sequence([
            Animated.spring(bounceAnim, {
                toValue: 1,
                friction: 2,
                tension: 100,
                useNativeDriver: true,
            }),
            Animated.spring(bounceAnim, {
                toValue: 0,
                friction: 2,
                tension: 100,
                useNativeDriver: true,
            }),
        ]).start();

        // 3초 뒤에 로그인 화면으로 이동
        const timeout = setTimeout(() => {
            try {
                navigation.replace('LoginScreen');
            } catch (error) {
                ToastAndroid.show('화면 전환 중 오류가 발생했습니다.', ToastAndroid.SHORT);
            }
        }, 3000);

        return () => clearTimeout(timeout);
    }, [bounceAnim, navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <Animated.Image
                source={require('./hochi_logo.png')}
                style={[
                    styles.logo,
                    {
                        transform: [
                            {
                                translateY: bounceAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -20],
                                }),
                            },
                        ],
                    },
                ]}
                resizeMode="contain"
            />
        </SafeAreaView>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: width * 0.5,
        height: width * 0.5,
    },
});

export default SplashScreen;
