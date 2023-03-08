import React from 'react';
import { StyleSheet, View, Text, Pressable, Animated, useWindowDimensions } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//all styles imported here
import styles from "./src/styling/AppStyle";

//all screens are imported here
// import Starter from "./src/screens/Main/Starter";
import Calendar from "./src/screens/Main/Components/Calendar";
import CalendarTransactionDetails from "./src/screens/Main/Components/Calendar Components/CalendarTransactionDetails";
import CalendarDayDetails from "./src/screens/Main/Components/Calendar Components/CalendarDayDetails";
import Metrics from "./src/screens/Main/Components/Metrics";
import Profile from "./src/screens/Main/Components/Profile";
import Aesthetics from "./src/screens/Main/Components/Profile Components/Aesthetics";
import Welcome from "./src/screens/Welcome Components/Welcome";
import Navigator from './src/screens/Main/Navigation';
import Main from "./src/screens/Main/Main"



export default function App(props:any): JSX.Element {
  
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
                        headerShown: false
                        // header:() => {return <Navigator />},
                      }}
        initialRouteName = "Main"
      >
        <Stack.Screen name = "Welcome" component = {Welcome}/>
        <Stack.Screen name = "Main" component = {Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
