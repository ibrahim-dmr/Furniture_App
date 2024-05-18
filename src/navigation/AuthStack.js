import React from "react";
// import LoginPage from "../screens/LoginPage"; 
// import SignupPage from "../screens/SignupPage"; 
import { LoginPage, SignupPage } from "../screens";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="SignUp" component={SignupPage} />
        </Stack.Navigator>
    )
}

export default AuthStack;
