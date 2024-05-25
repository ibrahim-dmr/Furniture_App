import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import categories from '../data/categories';

const CategoryPage = ({ route }) => {
  const { category } = route.params;

  // Kategorinin adına göre ilgili resimleri getir
  const categoryData = categories.find((item) => item.name === category);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{category}</Text>
      </View>
      <FlatList
        data={categoryData.images}
        renderItem={({ item }) => (
          <Image source={item} style={{ width: 200, height: 200, margin: 10 }} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </View>
  );
};

export default CategoryPage;
