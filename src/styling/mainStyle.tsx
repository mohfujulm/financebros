import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    navContainer: {
      marginTop: '5%',
      padding: '2%',
      flexDirection: 'row',
      width: '100%',
      // flex : 1,
      /* Apparently react native has this super cool feature where if you declare the first element
      flex box, it makes your header take up half the screen. Super cool dude! */
      height: 80, //cannot use percentage heigt for some reason, as it adds an additional view container "I think".
      alignItems: 'center',
      backgroundColor: 'grey',
    },
    TitleBar:{
      width: '60%',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      float: 'left',
    },
    IconBar: {
      width: '40%',
      flex: 1,
      flexDirection: 'row',
      float: 'right',
    },
    pressableButton: {
      borderRadius: 50,
      padding: '5%',
      marginLeft: '2%',
      backgroundColor: "black",
      marginBottom: 10,
      height: '60%',
      
      marginTop: 10,
    },
    buttonText: {
      color: "white",
      fontSize: 15,
    },
    iconStyle:{
      color: "white",
      fontSize: 15,
    },
    NavHeader:{
      color: 'white',
      fontSize: 25,
    }
  });
  

export default styles;