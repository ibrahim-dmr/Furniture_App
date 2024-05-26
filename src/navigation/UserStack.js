import React from 'react';
import { StyleSheet } from 'react-native';
import { HomePage, ProfilePage } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryPage from '../screens/CategoryPage';
import Favorites from '../screens/Favorites';
import DetailsScreen from '../screens/DetailsScreen'; // Doğru şekilde import edildiğinden emin olun

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="CategoryPage" component={CategoryPage} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({});
