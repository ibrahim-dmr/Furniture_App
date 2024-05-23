import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import categories from '../data/categories';

const HomePage = ({ navigation }) => {

    console.log(categories);
    
    const renderCategory = ({ item }) => (
        <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('CategoryPage', { category: item.name })}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Kategoriler</Text>
            {categories.length > 0 ? (
                <FlatList
                    data={categories}
                    renderItem={renderCategory}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.list}
                />
            ) : (
                <Text>No categories available.</Text>
            )}
        </View>
    );
};

export default HomePage;

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
        flex: 1,
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#fff',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,  // Yükseklik ekliyoruz
    },
    categoryImage: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',  // Görüntünün içeri sığmasını sağlıyoruz
    },
    categoryName: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center',  // Metni ortalıyoruz
    },
});
