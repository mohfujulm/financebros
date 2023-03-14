// import React from 'react';
import { StatusBar, Platform, StyleSheet, useWindowDimensions } from 'react-native';

const Mainstyles = StyleSheet.create({
  pageContainer : {
    width: '100%',
    height: '100%',
    
  },
  scrollContainer : {
    paddingTop: StatusBar.currentHeight,
  },
  backgroundStyle : {
    backgroundColor: '#E4FAEF',
    
  },
  border : {
    borderColor: '#485150',
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 30,
  },
  borderRadius : {
    borderRadius: 30,
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  },flex : {
    flex: 1,
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


  //text color and size
  headerText : {
    fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
    fontSize: 30,
    fontWeight: '500',
    color: '#375357',
  }, 
  paragraphText : {

  },
  centerText : {
    textAlign: 'center',
  },
    
  });
  

export default Mainstyles;