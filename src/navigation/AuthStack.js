import React from "react";
import {Login, SignupPage} from "../screens"
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack  = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginPage"
            screenOptions={{headerShown:false}}>
        
            <Stack.Screen name="LoginPage" component={Login}/>
            <Stack.Screen name="SignupPage" component={SignupPage}/>


        </Stack.Navigator>
    )
}

export default AuthStack
