import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    Image,
  
  
   } from 'react-native';
  
   import React, {useState} from 'react'
   import Loading from '../components/Loading'
  
  const Login = () => {
  
    const [name, setName] = useState("") 
    const [lastName, setlastName] = useState("")
    const [result, setresult] = useState("")
    const [isLoading, setisLoading ] = useState(false)
   
    console.log(isLoading)
  
    return (
  
      <View style={styles.container}>
  
        <Image
         source={require('../../assets/images/forlogin.png')} 
         style = {styles.Image}
        />
  
        <Text style={styles.welcome}>Welcome {result}</Text>
  
        <Text>Email</Text>
        <TextInput
        inputMode='email'
        placeholder='Enter Your Email'
        style={styles.textInputStyle}
        onChangeText={(value)=> setName(value)}
        value={name}
        />
  
        <Text>Password</Text>
        <TextInput
        secureTextEntry={true}
        placeholder='Enter Your Password'
        style={styles.textInputStyle}
        onChangeText={setlastName}
        value={lastName}
        />
  
        <Pressable 
  
          onPress={() => setisLoading(true)}
  
          style = {  ({pressed}) =>  [{
  
            backgroundColor: pressed ? "gray" : "blue"
  
          }, styles.button]  }>
  
          <Text style={styles.buttonText}>Login</Text>
  
        </Pressable>
  
          {isLoading ? <Loading changeIsLoading={() => setisLoading(false)} /> : null}
  
      </View>
  
    );
  }
  
  export default Login;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInputStyle:{
      borderWidth:1,
      width:'80%',
      height:50,
      borderRadius:10,
      marginVertical:15,
      textAlign:'center',
      color:'blue',
      fontWeight:'bold',
    },
  
    button:{
      width:'80%',
      height:50,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
    },
    buttonText:{
      fontWeight:'bold',
      color:'white',
    },
  
    Image:{
      width:"80%",
      height:"40%",
      borderRadius:10,

    },
  
    welcome:{
      fontWeight:'bold',
      fontSize:26
    }
  
  });
