import React from 'react';
import { StyleSheet, View, Text, Pressable, Animated, useWindowDimensions } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//all styles imported here
import styles from "./src/styling/mainStyle";

//all screens are imported here
import Starter from "./src/screens/Starter";
import Calendar from "./src/screens/Calendar";
import CalendarTransactionDetails from "./src/screens/Calendar Transaction Details";
import CalendarDayDetails from "./src/screens/Calendar Day Details";
import Metrics from "./src/screens/Metrics";
import Profile from "./src/screens/Profile";
import Aesthetics from "./src/screens/Aesthetics";

function Navigator(){

  const Navigation = useNavigation();
  const currentScreenName = String(Navigation.getState().routes[Navigation.getState().index].name);
  return (
    <View style={styles.navContainer}> 
      <View style={styles.TitleBar}>
        <Text style={styles.iconStyle}> ||| </Text>
        <Text style={styles.NavHeader}> {currentScreenName}</Text>
      </View>

      <View style = {styles.IconBar}>
        <Pressable style = {styles.pressableButton}
                  onPress = {() => Navigation.navigate('Profile')}>  
                  <Text style = {styles.buttonText}> P </Text>  
        </Pressable>

        <Pressable style = {styles.pressableButton}
                  onPress = {() => Navigation.navigate('Calendar')}>  
                  <Text style = {styles.buttonText}> C </Text>  
        </Pressable>

        <Pressable style = {styles.pressableButton}
                  onPress = {() => Navigation.navigate('Metrics')}>  
                  <Text style = {styles.buttonText}> M </Text>  
        </Pressable>
      </View>
      
    </View>
  );
}


export default function App(props:any): JSX.Element {
  
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
                        header:(props) => {return <Navigator {...props} />},
                      }}
        initialRouteName = "Starter"
      >
        <Stack.Screen name = "Starter" component = {Starter}/>
        <Stack.Screen name = "Profile" component = {Profile}/>
        <Stack.Screen name = "Calendar" component = {Calendar}/>
        <Stack.Screen name = "Metrics" component = {Metrics}/>
        <Stack.Screen name = "Aesthetics" component = {Aesthetics}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
