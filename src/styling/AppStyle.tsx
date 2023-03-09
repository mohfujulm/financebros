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
  }
  
  });
  

export default Mainstyles;