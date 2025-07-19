// GuestLoginScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function GuestLoginScreen({ navigation }) {
  const [nickname, setNickname] = useState('');

  const handleLogin = () => {
    if (nickname.trim().length === 0) {
      Alert.alert('닉네임을 입력해주세요');
      return;
    }
    if (nickname.length > 15) {
      Alert.alert('닉네임은 15자 이내로 입력해주세요');
      return;
    }
    navigation.replace('HomeScreen', { nickname });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>비회원 로그인</Text>
      <TextInput
        style={styles.input}
        placeholder="닉네임을 설정해주세요(15자 이내)"
        placeholderTextColor="#aaa"
        maxLength={15}
        value={nickname}
        onChangeText={setNickname}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1464a7',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 44,
    borderColor: '#1464a7',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 14,
    marginBottom: 15,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#1464a7',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
