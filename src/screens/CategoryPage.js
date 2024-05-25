import React from 'react';
import { View, Text } from 'react-native';

const CategoryPage = ({ route }) => {
  const { category } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{category}</Text>
    </View>
  );
};

export default CategoryPage;
