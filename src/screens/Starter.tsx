import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//https://reactnavigation.org/docs/typescript/
//need to figure out TypeScript bullshit (still functional without it)

export default function Starter() {
    return (
      <View>
        <View style = {styles.sectionContainer}> 
          <View><Text style={styles.iconStyle}> ||| </Text></View>
          <View><Text> Title of Thing</Text></View>

          <View style = {styles.IconBar}>
            <Pressable style = {styles.pressableButton}
                      onPress = {() => navigation.navigate('Profile')}>  
                      <Text style = {styles.buttonText}> Profile </Text>  
            </Pressable>

            <Pressable style = {styles.pressableButton}
                      onPress = {() => navigation.navigate('Calendar')}>  
                      <Text style = {styles.buttonText}> Calendar </Text>  
            </Pressable>

            <Pressable style = {styles.pressableButton}
                      onPress = {() => navigation.navigate('Aesthetics')}>  
                      <Text style = {styles.buttonText}> Aesthetics </Text>  
            </Pressable>
          </View>
          
        </View>
        <View style={styles.MainContainer}>
          <Text>Fuck you</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
 
  MainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'pink',
  },
});
