import React from "react"
import Login from "./src/screens/Login"
import Signup from "./src/screens/Signup"
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return(
    <NavigationContainer>

      <Login/>
      <Signup/>

    </NavigationContainer>
  )
}

export default App
