import React from "react"
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigation from "./src/navigation/rootNavigation";


const App = () => {
  return <RootNavigation/>
}

export default App;
