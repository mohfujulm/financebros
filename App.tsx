import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, View, Text, Pressable, Animated } from 'react-native';
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
      <Stack.Navigator screenOptions = {{
                        headerShown: true,  /* if changed to false disables header*/
                        headerTitleStyle: {
                          color: "white",
                        },
                        headerStyle: {
                          backgroundColor: "#292929",                
                        },
                        }}  
                        initialRouteName = "Starter">
        <Stack.Screen name = "Starter"
                      component = {Starter}
                      options = { ({ route, navigation }) => ({     
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                          color: "white",
                        },
                        headerStyle: {
                          backgroundColor: "#292929",                
                        },     
                        headerRight: () => {
                          return (
                            <View style = {styles.headerBar}>

                              <Pressable style = {styles.headerButton}
                                        onPress = {() => navigation.navigate('Calendar')}>
                                <Image style = {styles.headerButtonImage} source = {require('./src/assets/calendar.png')}/>   
                              </Pressable>
                              
                              <Pressable style = {styles.headerButton}
                                          onPress = {() => navigation.navigate('Profile')}>
                                <Image style = {styles.headerButtonImage} source = {require('./src/assets/profile.png')}/>   
                              </Pressable>

                              <Pressable style = {styles.headerButton}
                                          onPress = {() => navigation.navigate('Metrics')}>
                                <Image style = {styles.headerButtonImage} source = {require('./src/assets/metrics.png')}/>   
                              </Pressable>
                              
                            </View>
                        )  
                        },     
                      })}

                      />

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
  
  headerBar: {
    flex: 0.75,
    flexDirection: 'row',
    borderWidth: 0,
    borderColor: "red",
    justifyContent: "flex-end",
  },

  headerButton: {
    marginLeft: "5%",
    marginBottom: "3%",
  },
  headerButtonImage: {
    width: 30,
    height: 30,
  },
});

export default App;
