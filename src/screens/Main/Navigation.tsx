import React from 'react';
import { View, Text, Pressable, Image, Animated } from 'react-native';

import { useNavigation, useNavigationState, useRoute, StackActions } from '@react-navigation/native';

//all styles imported here
import styles from '../../styling/NavStyle';
import {
  useFonts,
  PlayfairDisplaySC_400Regular
} from "@expo-google-fonts/dev";

export default function Navigator(){

  const Navigation = useNavigation();
  const currentScreenName = String(Navigation.getState().routes[Navigation.getState().index].name);
  
  const route = useRoute();
  const position = useNavigationState(state => state.index);
  // console.log(route, '/n', position);

    function screenChange(stackName:never){
      // Navigation.dispatch(StackActions.popToTop());
      if (route.name !== stackName){
        Navigation.navigate(stackName); 
      }
      
    }

    let [fontsLoaded] = useFonts({
      PlayfairDisplaySC_400Regular,
    });
  
    if (!fontsLoaded) {
      return null;
    } 
    // console.log(fontsLoaded)
    return (
      <View style={styles.navContainer}> 
        <View style={styles.TitleBar}>
          <Text style={[styles.NavHeader]}> {currentScreenName}</Text>
        </View>
  
        <View style = {styles.IconBar}>
          <Pressable style = {styles.pressableButton}
                      onPress = {() => screenChange('Calendar')}>  
                      <Image source={require('../../assets/images/calendar.png')} style={styles.ImageStyle} />  
            </Pressable>

            <Pressable style = {styles.pressableButton}
                      onPress = {() => screenChange('Profile')}>  
                      <Image source={require('../../assets/images/profile.png')} style={styles.ImageStyle} />  
            </Pressable>
    
            <Pressable style = {styles.pressableButton}
                      onPress = {() => screenChange('Metrics')}>  
                      <Image source={require('../../assets/images/metrics.png')} style={styles.ImageStyle}/>  
            </Pressable>
        </View>
        
      </View>
    );
    
  }