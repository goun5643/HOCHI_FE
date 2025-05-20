import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function OnboardingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Onboarding Screen</Text>
            <Button title="Start" onPress={() => navigation.replace('HomeScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 22 }
});
