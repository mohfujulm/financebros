import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components
import CalendarMain from './CalendarComponents/CalendarMain';
import CalendarTransactionDetails from './CalendarComponents/CalendarTransactionDetails';
import CalendarDayDetails from './CalendarComponents/CalendarDayDetails'


export default function Metrics() {
    
    const Stack = createNativeStackNavigator()

    return (
      <Stack.Navigator
        screenOptions={{ 
                        headerShown: false
                        // header:() => {return <Navigator />},
                      }}
        initialRouteName = "Main"
      >
        <Stack.Screen name = "CalendarMain" component = {CalendarMain}/>
        <Stack.Screen name = "CalendarDayDetails" component = {CalendarDayDetails}/>
        <Stack.Screen name = "CalendarTransactionDetails" component = {CalendarTransactionDetails}/>
      
      </Stack.Navigator>
    );
}
