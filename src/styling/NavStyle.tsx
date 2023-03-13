// import React from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import {
    useFonts,
    Oswald_400Regular,
    Inter_900Black,
    RubikBurned_400Regular,
    PlayfairDisplaySC_400Regular
  } from "@expo-google-fonts/dev";


const styles = StyleSheet.create({
    navContainer: {
        paddingTop: ( Platform.OS === 'ios' ) ? '16%' : '12%',
        paddingBottom: '5%',
        flexDirection: 'row',
        width: Dimensions.get('window').width, 
        alignItems: 'center',
        backgroundColor: '#CAF5E0',
    },
    TitleBar:{
        marginLeft: '3%',
        width: '58%',
    },
    IconBar: {
        flexDirection: 'row',
    },
    
    pressableButton: {
        width: '18%',
        borderRadius: 50,
        padding: '2%',
        marginLeft: '2%',
        backgroundColor: "#42A998",
        height: '90%',
    },
    NavHeader:{
        color: '#375357',
        //this doesnt change no mater what I set it to and its pissing me off
        fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
        fontSize: 35,
    },
    ImageStyle :{
        borderRadius: 50,
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    }
  });
  

export default styles;