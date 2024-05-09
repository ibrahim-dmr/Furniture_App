import React from "react";
import { StyleSheet } from 'react-native';
import {HomePage, ProfilePage} from "../screens/index.js"
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UserStack = () => {   
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown:false}}>

            <Stack.Screen name="Home" component={HomePage}/>
            <Stack.Screen name="Profile" component={ProfilePage}/>

        </Stack.Navigator>

    )
}

export default UserStack

const styles = StyleSheet.create({})
