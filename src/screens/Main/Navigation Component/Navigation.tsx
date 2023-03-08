import React from 'react';
import { StyleSheet, View, Text, Pressable, Animated, useWindowDimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

//all styles imported here
import styles from '../../../styling/mainStyle';

export default function Navigator(){

    const Navigation = useNavigation();
    const currentScreenName = String(Navigation.getState().routes[Navigation.getState().index].name);
    return (
      <View style={styles.navContainer}> 
        <View style={styles.TitleBar}>
          <Text style={styles.iconStyle}> ||| </Text>
          <Text style={styles.NavHeader}> {currentScreenName}</Text>
        </View>
  
        <View style = {styles.IconBar}>
          <Pressable style = {styles.pressableButton}
                    onPress = {() => Navigation.navigate('Profile')}>  
                    <Text style = {styles.buttonText}> P </Text>  
          </Pressable>
  
          <Pressable style = {styles.pressableButton}
                    onPress = {() => Navigation.navigate('Calendar')}>  
                    <Text style = {styles.buttonText}> C </Text>  
          </Pressable>
  
          <Pressable style = {styles.pressableButton}
                    onPress = {() => Navigation.navigate('Metrics')}>  
                    <Text style = {styles.buttonText}> M </Text>  
          </Pressable>
        </View>
        
      </View>
    );
  }