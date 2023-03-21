import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Pressable, Animated, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { firebase } from '../../../firebase.js';

import Mainstyles from '../../../styling/AppStyle';
import styles from '../../../styling/WelcomeStyle';


export default function AccountScreen ({navigation}): JSX.Element {
    return(
        <SafeAreaView style={[Mainstyles.flex]}>
            <View style={[Mainstyles.pageContainer, Mainstyles.backgroundStyle, Mainstyles.horizontalCenter]}>
                
                <View style= {styles.topButton}>
                    <Pressable style = {[styles.topButtonStyle]} onPress={() => navigation.navigate('Login')}> 
                        <Text>{'<-'}</Text> 
                    </Pressable>
                </View>
            
                <ScrollView
                    contentContainerStyle={[styles.mainContainer, Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}
                    alwaysBounceVertical={true}
                    >
                    <TextInput style= {[styles.textInputStyle]} placeholder="Email: " placeholderTextColor="#000"/>
                    <TextInput style= {[styles.textInputStyle]} placeholder="Password: " placeholderTextColor="#000"/>
                    <TextInput style= {[styles.textInputStyle]} placeholder="Confirm Password: " placeholderTextColor="#000"/>
                    <Pressable style = {styles.buttonStyle} > 
                        <Text style={[styles.buttonText]}>Create Account</Text>
                    </Pressable>

                </ScrollView>
                
        
            
            </ View>
        </SafeAreaView>
    );
}