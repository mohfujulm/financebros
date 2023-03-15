// import React from 'react';
import { StatusBar, Platform, StyleSheet, Dimensions } from 'react-native';

const Mainstyles = StyleSheet.create({
  
  //page and background styling
  pageContainer : {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  backgroundStyle : {
    backgroundColor: '#E4FAEF',
    
  },

  //border styling
  border : {
    borderColor: '#485150',
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 30,
  },
  borderRadius : {
    borderRadius: 30,
  },

  //flexstyling
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
  flexLeft : {
    alignItems: 'flex-start',
  },
  flexRight : {
    alignItems: 'flex-end',
  },
  
  flex : {
    flex: 1,
  },


  //top button styles
  topButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  topButton : {
    top: '3%',
    left: '5%',
    width: '15%',
    height: '10%',
  },
  topButtonStyle : {
    backgroundColor: 'white',
    borderRadius: 50,
    height: '40%',
    //has to have a height or else fucks up.
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
    fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
    fontSize: 15,
    fontWeight: '300',
    color: '#375357',
  },
  centerText : {
    textAlign: 'center',
  },
    
  });
  

export default Mainstyles;