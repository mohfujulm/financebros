import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Animated, ActivityIndicator, TextInput } from 'react-native';
import { firebase } from '../../../firebase.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import styles from '../../../styling/WelcomeStyle';


export default function LoginScreen ({navigation}) :JSX.Element{
    
    return(
        <View style={[styles.mainContainer, styles.flexCol]}>
            <View style={[styles.welcomeContainer, styles.flexCol]}>
                <Text style = {styles.welcomeText}>Welcome</Text>
            </View>
            <View style={[styles.flexCol, styles.contentContainer]}>
                <View style={[styles.contextField, styles.flexCol]}>
                    <TextInput style= {[styles.textInputStyle]} placeholder="Email: " placeholderTextColor="#243E36"/>
                        <TextInput style= {[styles.textInputStyle]} placeholder="Password: " placeholderTextColor="#243E36"/>
                    <Pressable style = {styles.buttonStyle} > 
                        <Text style= {styles.buttonText}>Login</Text>
                    </Pressable>

                </View>
                    
                <Pressable  onPress={() => navigation.navigate('CreateAccount')} style = {[styles.buttonStyle, styles.bottomButton]} > 
                    <Text style= {[styles.buttonText, styles.bottombuttonText]}>Create Account</Text>
                </Pressable>    

            </View>
            

        </ View>
    );
}