import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomTextInput = ({title, isSecureText, handleOnChangeText, handleValue, handlePlaceholder}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputBoxText}>{title}</Text>
            <TextInput
                secureTextEntry={isSecureText}
                placeholder= {handlePlaceholder}
                style={styles.textInputStyle}
                onChangeText={handleOnChangeText}
                value={handleValue}
            />
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer:{
        width: '80%',
    },
    inputBoxText:{
        fontWeight:'bold',
        
    },
    textInputStyle: {
        borderBottomWidth: 0.5,
        width: '100%',
        height: 50,
        borderRadius: 10,
        marginVertical: 15,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
    },    
})