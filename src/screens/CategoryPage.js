import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/FavoritesSlice'; // import Redux action
import categories from '../data/categories';

const CategoryPage = ({ navigation, route }) => {
  const { category } = route.params;
  const dispatch = useDispatch(); // useDispatch hook

  // Kategorinin adına göre ilgili resimleri getir
  const categoryData = categories.find((item) => item.name === category);

  // Başlıkları seçilen kategoriye göre belirlemek için bir nesne kullanıyoruz
  const categoryTitles = {
    'Yemek Odası': 'Yemek Odası Takımları',
    'Oturma Odası': 'Oturma Odası Takımları',
    'Yatak Odası': 'Yatak Odası Takımları',
    'Çocuk Odası': 'Çocuk Odası Takımları',
  };

  // Açıklama metinleri
  const categoryDescriptions = {
    'Yemek Odası': 'Yemek odası grupları şıklığı ve konforu bir arada sunar. Kişisel zevklere göre dekorasyonu şekillendirmeye olanak tanır.',
    'Oturma Odası': 'Salon oturma odası grupları evlerde maksimum konfora ulaşabilmeye zemin hazırlar. Kişisel beğenilere göre dekorasyonu şekillendirmeye olanak tanıyan koltuk takımları modelleri, zengin ürün yelpazesine sahiptir. Oturma odasına yerleştirilmek üzere seçilebilecek ürün çeşitliliği arasında farklı tasarımlar bulunur. L koltuk veya köşe takımları da bu seçenekler arasında yerini alır. Geniş aralıkta sunulan seçenekler, evdeki eksikleri güvenle tamamlar.',
    'Yatak Odası': 'Yatak odası grupları rahatlık ve estetiği bir arada sunar. Geniş ürün yelpazesi ile kişisel tarzınızı yansıtır.',
    'Çocuk Odası': 'Çocuk odası grupları, çocukların hayal gücünü geliştirecek şekilde tasarlanmıştır. Farklı renk ve tasarımlarla odalara neşe katar.',
  };

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.categoryTitle}>{categoryTitles[category]}</Text>
      <Text style={styles.descriptionText}>{categoryDescriptions[category] || 'Kategori açıklaması mevcut değil.'}</Text>
    </View>
  );

  const addToFavorites = (item) => {
    dispatch(addFavorite(item)); // dispatch the addFavorite action
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
      <View style={styles.imageContainer}>
        <Image source={item.src} style={styles.image} />
        <Text style={styles.imageTitle}>{item.name}</Text>
        <TouchableOpacity onPress={() => addToFavorites(item)} style={styles.favoriteButton}>
          <Text style={styles.favoriteButtonText}>Favorilere Ekle</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <Text style={styles.categoryTitle}>{categoryTitles[category]}</Text>
      </View>
      <FlatList
        data={categoryData.images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        contentContainerStyle={{ alignItems: 'center' }}
        ListHeaderComponent={renderHeader}
      />
      <TouchableOpacity
        style={styles.favoritesButton}
        onPress={() => navigation.navigate('Favorites')}
      >
        <Text style={styles.favoritesButtonText}>Favoriler</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#555',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
    margin: 15,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  favoriteButton: {
    marginTop: 10,
    backgroundColor: '#FF6347',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  favoriteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  favoritesButton: {
    marginTop: 20,
    backgroundColor: '#6495ED',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  favoritesButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CategoryPage;

