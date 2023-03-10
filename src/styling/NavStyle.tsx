// import React from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    navContainer: {
        // marginTop: '5%',
        // paddingLeft: '4%',
        paddingTop: ( Platform.OS === 'ios' ) ? '16%' : '12%',
        paddingBottom: '5%',
        flexDirection: 'row',
        width: Dimensions.get('window').width, //Need to figure out how to make this an actual percentage
        // flex : 1,
        /* Apparently react native has this super cool feature where if you declare the first element
        flex box, it makes your header take up half the screen. Super cool dude! */
         //cannot use percentage heigt for some reason, as it adds an additional view container "I think".
        alignItems: 'center',
        backgroundColor: '#485150',
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
        padding: '5%',
        marginLeft: '2%',
        backgroundColor: "#373E40",
        height: '90%',
    },
    buttonText: {
        textAlign: 'center',
        color: "white",
        fontSize: 10,
    },
    iconStyle:{
        color: "white",
        fontSize: 15,
    },
    NavHeader:{
        color: 'white',
        fontSize: 35,
    },
    ImageStyle :{
        border: 50,
        margin: 0,
        padding: 0,
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch',
    }
  });
  

export default styles;