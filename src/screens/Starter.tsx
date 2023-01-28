import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Animated } from 'react-native';

//https://reactnavigation.org/docs/typescript/
//need to figure out TypeScript bullshit (still functional without it)
function Starter({ navigation }) {
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
          <Text></Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: '5%',
    padding: '2%',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  MainContainer: {
    height: '81%',
    width: '100%',
    backgroundColor: 'pink',
  },
  IconBar: {
    flex: 1,
    flexDirection: 'row',
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
    borderRadius: 50,
    padding: '5%',
    marginLeft: '2%',
    backgroundColor: "black",
    marginBottom: 10,
    height: '60%',
    
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  iconStyle:{
    color: "white",
    fontSize: 15,
  },
});

export default Starter;