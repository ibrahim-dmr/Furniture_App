import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword, setIsLoading } from '../redux/userSlice';
import { Loading, CustomTextInput, CustomButton } from '../components';
import { signInWithEmailAndPassword } from 'firebase/auth'; // firebase auth fonksiyonunu ekledik
import { auth } from '../../config/firebase';

const LoginPage = ({ navigation }) => {
    const { email, password, isLoading } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogin = async () => {
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }
        dispatch(setIsLoading(true));
        try {
            // Firebase authentication işlemleri
            await signInWithEmailAndPassword(auth, email, password); // giriş işlemi
            // Giriş başarılı olduğunda yapılacak işlemler buraya gelecek
            // Örneğin:
            navigation.navigate("UserStack")
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            dispatch(setIsLoading(false));
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Hoş Geldiniz</Text>
            <Image source={require('../../assets/images/forlogin.png')} style={styles.image} />
            <CustomTextInput
                title="Email"
                isSecureText={false}
                handleOnChangeText={(text) => dispatch(setEmail(text))}
                handleValue={email}
                handlePlaceholder='Enter Your Email'
            />
            <CustomTextInput
                title="Password"
                isSecureText={true}
                handleOnChangeText={(text) => dispatch(setPassword(text))}
                handleValue={password}
                handlePlaceholder='Enter Your Password'
            />
            <CustomButton
                buttonText="Login"
                setWidth="80%"
                handleOnPress={handleLogin}
                buttonColor="blue"
                pressButonColor="gray"
            />
            <CustomButton
                buttonText="Sign Up"
                setWidth="30%"
                handleOnPress={() => navigation.navigate('SignUp')}
                buttonColor="gray"
                pressButonColor="lightgray"
            />
            {isLoading && <Loading />}
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
    welcome: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30,
    },
    image: {
        width: '80%',
        height: '35%',
        borderRadius: 10,
        marginBottom: 30,
    },
});

export default LoginPage;
