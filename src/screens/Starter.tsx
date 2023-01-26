import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Animated } from 'react-native';

//https://reactnavigation.org/docs/typescript/
//need to figure out TypeScript bullshit (still functional without it)
function Starter({ navigation }) {
    return (
      <View style = {styles.sectionContainer}> 
        <Text> hello its me the barebones starter page </Text>

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
    );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  pressableButton: {
    borderRadius: 5,
    backgroundColor: "black",
    marginBottom: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
});

export default Starter;