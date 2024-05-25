import React from "react";
import { StyleSheet } from 'react-native';
import { HomePage, ProfilePage } from "../screens/index.js";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "../screens/DetailsScreen.js";
import CategoryPage from "../screens/CategoryPage.js";

const Stack = createNativeStackNavigator();

const UserStack = () => {   
    return (
        <Stack.Navigator
            initialRouteName="HomePage"
            screenOptions={{ headerShown: false }}>

            <Stack.Screen name="HomePage" component={HomePage}/>
            <Stack.Screen name="Profile" component={ProfilePage}/>
            <Stack.Screen name="Details" component={DetailsScreen}/>
            <Stack.Screen name="CategoryPage" component={CategoryPage}/>


        </Stack.Navigator>
    )
}

export default UserStack;

const styles = StyleSheet.create({})
