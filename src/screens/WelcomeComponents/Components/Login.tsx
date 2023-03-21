import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Animated, TextInput, ScrollView } from 'react-native';
import { firebase } from '../../../firebase.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Mainstyles from '../../../styling/AppStyle';
import styles from '../../../styling/WelcomeStyle';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function LoginScreen ({navigation}) :JSX.Element{
    
    return(
        <SafeAreaView style={[Mainstyles.flex]}>
            <View style={[Mainstyles.pageContainer, Mainstyles.flexCol, Mainstyles.backgroundStyle, Mainstyles.horizontalCenter]}>
                <View style={[styles.welcomeContainer, Mainstyles.flexCol, Mainstyles.verticalCenter, Mainstyles.horizontalCenter]}>
                    <Text style = {styles.welcomeText}>Welcome</Text>
                </View>
                <ScrollView 
                contentContainerStyle={[styles.mainContainer, Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}
                    alwaysBounceVertical={true}
                    >
                        <TextInput style= {[styles.textInputStyle]} placeholder="Email: " placeholderTextColor="#243E36"/>
                            <TextInput style= {[styles.textInputStyle]} placeholder="Password: " placeholderTextColor="#243E36"/>
                        <Pressable style = {styles.buttonStyle} > 
                            <Text style= {styles.buttonText}>Login</Text>
                        </Pressable>
                        
                        

                </ScrollView>
                <View style={[styles.footerContainer, Mainstyles.flexCol, Mainstyles.verticalCenter, Mainstyles.horizontalCenter]}>
                    <Pressable  onPress={() => navigation.navigate('CreateAccount')} style = {[styles.buttonStyle, styles.bottomButton]} > 
                        <Text style= {[styles.buttonText, styles.bottombuttonText]}>Create Account</Text>
                    </Pressable>  
                </View>
                    

                

        </ View>

        </SafeAreaView>
        
    );
}