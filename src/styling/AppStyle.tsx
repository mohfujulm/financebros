// import React from 'react';
import { Platform, StyleSheet, useWindowDimensions } from 'react-native';

const Mainstyles = StyleSheet.create({
  pageContainer : {
    width: '100%',
    height: '100%',
  }, border : {
    borderColor: '#485150',
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 30,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCol : {
    flexDirection: 'column',
  },
  horizontalCenter : {
    alignItems: 'center',
  },
  verticalCenter : {
    justifyContent: 'center',
  },
  textAlignCenter : {
    textAlign: 'center',
  },
  flexRight : {
    alignItems: 'flex-end',
  },


  //top back button style

  topButton :{
    top: '3%',
    left: '3%',
    margin: '5%',
    width: '25%',
    height: '20%',
  },
  topButtonStyle : {
      border: 'black solid 1px',
      backgroundColor: 'white',
      borderRadius: 50,
      height: '30%', //has to have a height or else fucks up.
      justifyContent: 'center',
      alignItems: 'center',
  },
    
  });
  

export default Mainstyles;