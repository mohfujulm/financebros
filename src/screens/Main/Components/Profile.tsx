import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components
import ProfileMain from './ProfileComponents/ProfileMain'

export default function Profile() {
    
    const Stack = createNativeStackNavigator()

    return (
      <Stack.Navigator
        screenOptions={{ 
                        headerShown: false
                        // header:() => {return <Navigator />},
                      }}
        initialRouteName = "ProfileMain"
      >
        <Stack.Screen name = "ProfileMain" component = {ProfileMain}/>
      </Stack.Navigator>
    );
}
