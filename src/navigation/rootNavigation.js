import React from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack"
import UserStack from "./UserStack";

const rootNavigation = () => {

    const isAuth = false

    return (
        <NavigationContainer>
            {
                !isAuth 
                    ? <AuthStack/> 
                    : <UserStack/>
            }

        </NavigationContainer>
    )
}

export default rootNavigation
