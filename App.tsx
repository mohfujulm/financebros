import React from 'react';
import { StyleSheet, View, Text, Pressable, Animated, useWindowDimensions } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//all styles imported here
import styles from "./src/styling/mainStyle";

//all screens are imported here
import Starter from "./src/screens/Main/Starter";
import Calendar from "./src/screens/Main/Calendar Components/Calendar";
import CalendarTransactionDetails from "./src/screens/Main/Calendar Components/Calendar Transaction Details";
import CalendarDayDetails from "./src/screens/Main/Calendar Components/Calendar Day Details";
import Metrics from "./src/screens/Main/Metrics Components/Metrics";
import Profile from "./src/screens/Main/Profile Components/Profile";
import Aesthetics from "./src/screens/Main/Profile Components/Aesthetics";
import Welcome from "./Welcome Components/Welcome";
import Navigator from './src/screens/Main/Navigation Component/Navigation';




export default function App(props:any): JSX.Element {
  
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
                        header:() => {return <Navigator />},
                      }}
        initialRouteName = "Welcome"
      >
        <Stack.Screen name = "Starter" component = {Starter}/>
        <Stack.Screen name = "Welcome" component = {Welcome}/>
        <Stack.Screen name = "Profile" component = {Profile}/>
        <Stack.Screen name = "Calendar" component = {Calendar}/>
        <Stack.Screen name = "Metrics" component = {Metrics}/>
        <Stack.Screen name = "Aesthetics" component = {Aesthetics}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
