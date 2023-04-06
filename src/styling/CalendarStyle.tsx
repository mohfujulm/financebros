import { Platform, StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    
    sectionTitle: {
      fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    calendarContainer: {
      width: Dimensions.get('window').width,
      height: '100%',
      paddingBottom : ( Platform.OS === 'ios' ) ? Dimensions.get('window').height*.16 : Dimensions.get('window').height*.14,

    },
    monthContainer: {
      width: '100%',
      height: ( Platform.OS === 'ios' ) ? Dimensions.get('window').height*.65 : Dimensions.get('window').height*.7,
      // maxHeight: 600,
      
    },


    //calendar day styling
    monthTitle: {
      width: '100%', 
      // marginHorizontal: '5%',
      height: 50, 
    },
    monthText: {
      fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
      textAlign: 'center',
      color: '#375357',
      fontSize: 30,
      // marginTop: '10%',
    },
    dayContainer: {
      width: '100%', 
      height: '100%',
    },
    containerOne: {
      width: '14.2857%',
      height: '16.7%',
      borderWidth: 1,
      borderColor: '#98C1AC',
    },
    containerTwo: {
      width: '14.2857%',
      height: '20%',
      borderWidth: 1,
      borderColor: '#98C1AC',
    },
    containerThree: {
      width: '14.2857%',
      height: '25%',
      borderWidth: 1,
      borderColor: '#98C1AC',
    },
    // day: {
    //   backgroundColor: '#9EDCBD' ,
    // },
    currentDay : {
      backgroundColor: '#FBFFCF',
    },
    day: {
      backgroundColor: '#CAF5E0',
    },
    dayTwoNumber : {
      fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
      color: '#032329',
    },
    dayOneNumber : {
      fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
      color: '#032329',
    }, 
    currentNumber : {
      fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
      color: '#032329',
    },
    

    titleContainer: {
      height: '5%',
      backgroundColor: '#98C1AC',
    },  
    
    titleLabel: {
      height: '100%',
      width: '14.2857%',
      // borderWidth: 1,
      // borderColor: 'black',
      
    },
    titleText: {
      textAlignVertical: 'center',
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight: "400",
      margin: 'auto',
    },
  //Text Styling
    dayText : {
      margin: '10%',
      fontSize: 15,
    },
    buttonText: {
      textAlignVertical: 'center',
      textAlign: 'center',
      color: '#C6F5E8',
      fontSize: 20,
      fontWeight: "400",
  },
  });
  

  export default styles;