import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SignupComponent = () => {
    return(
        <View style={styles.container}>
            <Text>SignupPage</Text>
        </View>
    )
}

export default SignupComponent;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fceed9',

    },
})
