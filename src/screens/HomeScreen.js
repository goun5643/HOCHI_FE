import React from 'react';
import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* 상단 검색창 */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="강의실, 건물, 장소 검색"
                />
                <Ionicons name="search" size={24} color="#888" style={styles.searchIcon} />
            </View>

            {/* 카테고리 스크롤 */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
                {['도서관', '편의점', '정류장', '카페', '주차장', '식당', '휴게공간'].map((label, idx) => (
                    <TouchableOpacity key={idx} style={styles.categoryButton}>
                        <Text style={styles.categoryText}>{label}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* 지도 */}
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 36.785371, // 대략적인 호서대 위치
                    longitude: 127.001493,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    coordinate={{ latitude: 36.785371, longitude: 127.001493 }}
                    title="내 위치"
                    pinColor="blue"
                />
            </MapView>

            {/* 하단 탭바 */}
            <View style={styles.bottomTab}>
                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                    <Ionicons name="star" size={28} color="#007AFF" />
                    <Text style={styles.tabText}>즐겨찾기</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name="person" size={28} color="#007AFF" />
                    <Text style={styles.tabText}>MY</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Record')}>
                    <MaterialIcons name="list-alt" size={28} color="#007AFF" />
                    <Text style={styles.tabText}>기록</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12,
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
    },
    searchIcon: {
        marginLeft: 8,
    },
    categoryScroll: {
        maxHeight: 50,
        paddingHorizontal: 10,
    },
    categoryButton: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 8,
    },
    categoryText: {
        fontSize: 14,
    },
    map: {
        flex: 1,
        marginHorizontal: 12,
        borderRadius: 15,
        overflow: 'hidden',
    },
    bottomTab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#fff',
    },
    tabText: {
        textAlign: 'center',
        fontSize: 12,
        marginTop: 4,
    }
});
