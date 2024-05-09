import React, { useState } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    Image,
} from 'react-native';
import Loading from '../components/Loading';

const LoginPage = ({ navigation }) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    console.log(isLoading)

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/forlogin.png')}
                style={styles.image}
            />
            <Text style={styles.welcome}>Welcome {result}</Text>
            <Text>Email</Text>
            <TextInput
                inputMode='email'
                placeholder='Enter Your Email'
                style={styles.textInputStyle}
                onChangeText={(value) => setName(value)}
                value={name}
            />
            <Text>Password</Text>
            <TextInput
                secureTextEntry={true}
                placeholder='Enter Your Password'
                style={styles.textInputStyle}
                onChangeText={(value) => setLastName(value)}
                value={lastName}
            />
            <Pressable
                onPress={() => setIsLoading(true)}
                style={({ pressed }) => [{
                    backgroundColor: pressed ? "gray" : "blue"
                }, styles.button]}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('Signup')} // Buradaki 'SignUpPage' yerine 'Signup' olarak düzeltildi
                style={({ pressed }) => [{
                    backgroundColor: pressed ? "gray" : "lightgray",
                    marginTop: 50,
                }, styles.signupButton]}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            {isLoading ? <Loading changeIsLoading={() => setIsLoading(false)} /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputStyle: {
        borderWidth: 1,
        width: '80%',
        height: 50,
        borderRadius: 10,
        marginVertical: 15,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
    },
    image: {
        width: "80%",
        height: "40%",
        borderRadius: 10,
    },
    welcome: {
        fontWeight: 'bold',
        fontSize: 26
    },
    signupButton: {
        width: '30%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default LoginPage;
