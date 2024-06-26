import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import categories from '../data/categories';

const HomePage = ({ navigation }) => {
    const renderCategory = ({ item }) => (
        <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('CategoryPage', { category: item.name })}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Kategoriler</Text>
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fceed9',
        padding: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryContainer: {
        margin: 5,
        borderRadius: 30,
        backgroundColor: '#fff',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        height: 140,
        width: '47%', // Genişliği yarım ekran genişliği kadar olacak şekilde ayarlandı
    },
    categoryImage: {
        width: '105%',
        height: 100,
        resizeMode: 'cover', // 'contain' yerine 'cover' kullanıldı
    },
    categoryName: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center',
    },
});

export default HomePage;
