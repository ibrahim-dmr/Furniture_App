import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { auth, firestore } from '../../config/firebase';


const ProfilePage = () => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}

export default ProfilePage

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})