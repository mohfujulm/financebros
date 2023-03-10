import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Animated, ActivityIndicator, TextInput } from 'react-native';
import { firebase } from '../../firebase.js';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


import styles from '../../styling/WelcomeStyle';

import CreateAccount from './Components/CreateAccount'
import Login from './Components/Login'

export default function Welcome ():JSX.Element {
    //components
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{ 
                            headerShown: false
                            // header:() => {return <Navigator />},
                        }}
            initialRouteName = "Login"
        >
            <Stack.Screen name = "CreateAccount" component = {CreateAccount}/>
            <Stack.Screen name = "Login" component = {Login}/>
        </Stack.Navigator>
    );
}

