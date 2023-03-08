import React from 'react';
import { StyleSheet, View, Text, Pressable, Animated, useWindowDimensions } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//all styles imported here
import styles from "../../styling/AppStyle";

//all screens are imported here
import Calendar from "./Components/Calendar";
import Metrics from "./Components/Metrics";
import Profile from "./Components/Profile";
import Navigator from './Navigation';

export default function App(props:any): JSX.Element {
  
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator
        screenOptions={{ 
                        header:() => {return <Navigator />},
                      }}
        initialRouteName = "Calendar"
      >
        <Stack.Screen name = "Profile" component = {Profile}/>
        <Stack.Screen name = "Calendar" component = {Calendar}/>
        <Stack.Screen name = "Metrics" component = {Metrics}/>
      </Stack.Navigator>
  );
}
