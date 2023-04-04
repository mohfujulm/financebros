import React from 'react';
import { SafeAreaView, View, Text, Pressable, Animated, useWindowDimensions } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//https://reactnavigation.org/docs/handling-safe-area/
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


//all styles imported here

//components imported here
import Welcome from "./src/screens/WelcomeComponents/Welcome";
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
