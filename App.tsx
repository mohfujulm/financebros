import React from 'react';
import { StyleSheet, View, Text, Pressable, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//all screens are imported here
import Starter from "./src/screens/Starter";
import Calendar from "./src/screens/Calendar";
import CalendarTransactionDetails from "./src/screens/Calendar Transaction Details";
import CalendarDayDetails from "./src/screens/Calendar Day Details";
import Metrics from "./src/screens/Metrics";
import Profile from "./src/screens/Profile";
import Aesthetics from "./src/screens/Aesthetics";

function App(): JSX.Element {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }} /* if changed to false disables header*/ initialRouteName = "Starter">
        <Stack.Screen name = "Starter" component = {Starter}/>
        <Stack.Screen name = "Profile" component = {Profile}/>
        <Stack.Screen name = "Calendar" component = {Calendar}/>
        <Stack.Screen name = "Metrics" component = {Metrics}/>
        <Stack.Screen name = "Aesthetics" component = {Aesthetics}/>
      </Stack.Navigator>
    </NavigationContainer>
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
});

export default App;
