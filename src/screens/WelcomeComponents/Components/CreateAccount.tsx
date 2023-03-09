import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Animated, ActivityIndicator, TextInput } from 'react-native';
import { firebase } from '../../../firebase.js';


import styles from '../../../styling/WelcomeStyle';


export default function AccountScreen ({navigation}): JSX.Element {
    return(
        <View style={[styles.mainContainer]}>
            <View style= {styles.topButton}>
            <Pressable style = {[styles.topButtonStyle]} onPress={() => navigation.navigate('Login')}> 
                <Text>Back</Text> 
            </Pressable>
            </View>
            
            <View style={[styles.contextField, styles.flexCol]}>
                
                    <TextInput style= {[styles.textInputStyle, styles.emailStyle]} placeholder="Email: " placeholderTextColor="#000"/>
                    <TextInput style= {[styles.textInputStyle, styles.passwordStyle]} placeholder="Password: " placeholderTextColor="#000"/>
                    <TextInput style= {[styles.textInputStyle, styles.passwordStyle]} placeholder="Confirm Password: " placeholderTextColor="#000"/>
                <Pressable style = {styles.buttonStyle} > 
                    <Text>Create Account</Text>
                </Pressable>
            </View>
            
        </ View>
    );
}