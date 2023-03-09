import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components
import MetricsMain from './MetricsComponents/MetricsMain'

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
        <Stack.Screen name = "MetricsMain" component = {MetricsMain}/>
      </Stack.Navigator>
    );
}
