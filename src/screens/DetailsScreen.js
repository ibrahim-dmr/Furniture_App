import React from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/colors'; // COLORS'ı import ettiğinizden emin olun

const DetailsScreen = ({ navigation, route }) => {
  const furniture = route.params.item;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View style={styles.headerBtn}>
          <Icon name="chevron-left" size={25} onPress={() => navigation.goBack()} />
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Details</Text>
        <View style={styles.headerBtn}>
          <Icon name="dots-vertical" size={25} color={COLORS.primary} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{furniture.name}</Text>
          <Text style={{ fontSize: 18, color: COLORS.primary, marginBottom: 10 }}>Price: ${furniture.price}</Text>
          <Text style={{ fontSize: 16 }}>{furniture.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
