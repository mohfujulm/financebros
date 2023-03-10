import React from 'react';
import { StyleSheet, View, Text, Pressable, Image, Animated } from 'react-native';

import { useNavigation } from '@react-navigation/native';

//all styles imported here
import styles from '../../styling/NavStyle';

export default function Navigator(){

    const Navigation = useNavigation();
    const currentScreenName = String(Navigation.getState().routes[Navigation.getState().index].name);

    return (
      <View style={styles.navContainer}> 
        <View style={styles.TitleBar}>
          <Text style={styles.NavHeader}> {currentScreenName}</Text>
        </View>
  
        <View style = {styles.IconBar}>
          <Pressable style = {styles.pressableButton}
                      onPress = {() => Navigation.navigate('Calendar')}>  
                      <Image source={require('../../assets/images/calendar.png')} style={styles.ImageStyle} />  
            </Pressable>

            <Pressable style = {styles.pressableButton}
                      onPress = {() => Navigation.navigate('Profile')}>  
                      <Image source={require('../../assets/images/profile.png')} style={styles.ImageStyle} />  
            </Pressable>
    
            <Pressable style = {styles.pressableButton}
                      onPress = {() => Navigation.navigate('Metrics')}>  
                      <Image source={require('../../assets/images/metrics.png')} style={styles.ImageStyle}/>  
            </Pressable>
        </View>
        
      </View>
    );
  }