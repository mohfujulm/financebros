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
      width: '100%',
      height: ( Platform.OS === 'ios' ) ? Dimensions.get('window').height*.8 : Dimensions.get('window').height*.75,
    },


    //calendar day styling
    container: {
      width: '14.2857%',
      height: '16.7%',
      borderWidth: 1,
      borderColor: '#98C1AC',
    },
    empty: {
      backgroundColor: '#9EDCBD' ,
    },
    currentDay : {
      backgroundColor: '#FBFFCF',
    },
    day: {
      backgroundColor: '#CAF5E0',
    },
    emptyNumber : {
      color: '#032329',
    },dayNumber : {
      fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
      color: '#032329',
    }, currentNumber : {
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
      
    },titleText: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: "400",
        margin: 'auto',
    },
    footerContainer: {
      width: '100%',
      height: '8%',
      // backgroundColor: '#cce3de',
    },
    addTransaction : {
      width: ( Platform.OS === 'ios' ) ? 60 : 50,
      backgroundColor: '#42A998',
      marginTop: ( Platform.OS === 'ios' ) ? '8%' : '4%',
      height: ( Platform.OS === 'ios' ) ? 60 : 50,
      bottom: 0,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
    }
    

    
    //Text Styling
    , dayText : {
      margin: '10%',
      fontSize: 15,
    },buttonText: {
      textAlignVertical: 'center',
      textAlign: 'center',
      color: '#C6F5E8',
      fontSize: 20,
      fontWeight: "400",
  },
  });
  

  export default styles;