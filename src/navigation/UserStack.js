import React from "react";
import { StyleSheet } from 'react-native';
import {Home, Profile} from "../screens"
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomePage"
            screenOptions={{headerShown:false}}>

            <Stack.Screen name="HomePage" component={Home}/>
            <Stack.Screen name="ProfilePage" component={Profile}/>

        </Stack.Navigator>

    )
}

export default UserStack

const styles = StyleSheet.create({})
