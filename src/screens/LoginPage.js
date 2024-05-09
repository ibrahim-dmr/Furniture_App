import React, { useState } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    Image,
} from 'react-native';
import {Loading, CustomTextInput, CustomButton} from '../components/';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    console.log(isLoading)

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome {result}</Text>

            <Image
                source={require('../../assets/images/forlogin.png')}
                style={styles.image}
            />

            <CustomTextInput
              title="Email"
              isSecureText = {false}
              handleOnChangeText = {setEmail}
              handleValue = {email}
              handlePlaceholder = 'Enter Your Email'
              />
            
            <CustomTextInput
              title="Password"
              isSecureText = {true}
              handleOnChangeText = {setPassword}
              handleValue = {password}
              handlePlaceholder = 'Enter Your Password'
              />

            <CustomButton
              buttonText = "Login"
              setWidth = "80%"
              handleOnPress = {() => setIsLoading(true)}
              buttonColor = "blue"
              pressButonColor = "gray"
            />

            <CustomButton
              buttonText = "Sign Up"
              setWidth = "30%"
              handleOnPress = {() => navigation.navigate('SignUp')} 
              buttonColor = "gray"
              pressButonColor = "lightgray"
            />

            {isLoading ? <Loading changeIsLoading={() => setIsLoading(false)} /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fceed9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer:{
      width: '80%',

    },
    image: {
        width: "80%",
        height: "35%",
        borderRadius: 10,
        marginBottom: 30,
      },
    welcome: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30,
    },
    signupButton: {
        width: '30%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoginPage;
