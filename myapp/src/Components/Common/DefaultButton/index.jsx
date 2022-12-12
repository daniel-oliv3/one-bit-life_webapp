import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";



/* ======= Default Button ======= */
export default function DefaultButton({
    buttonText,
    handlePress,
    width,
    height,
}){
    return (
        <TouchableOpacity
            style={[styles.button, {width: width, height: height}]}
            activeOpacity={0.7}
            onPress={handlePress}
        >
            <Text> {buttonText} </Text>
        </TouchableOpacity>
    );
}
    
const styles = StyleSheet.create({
    button: {
        alignItems: "center",

    },
    buttonText: {
        color: "#fff",
    }
});