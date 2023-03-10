import { Platform, StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    //Flex Styling
    flexRow:{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },flexCol:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }
    
    ,sectionContainer: { //main Section
      width: '100%',
      height: '100%',
      backgroundColor: '#485150', 
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
    highlight: {
      fontWeight: '700',
    },
    calendarContainer: {
      width: '100%',
      height: '100%',
    },
    container: {
      width: '14.13%',
      height: '15%',
      borderWidth: 1,
      borderColor: 'black',
    },
    empty: {
      backgroundColor: '#243E36' ,
    },
    currentDay : {
      backgroundColor: '#F1F7ED',
    },
    day: {
      backgroundColor: '#7CA982',
    },
    

    titleContainer: {
        height: '5%',
        backgroundColor: '#CBD3C5',
      },  
    titleLabel: {
      height: '100%',
      width: '14.13%',
    //   borderWidth: 1,
      borderColor: 'black',
      
    },titleText: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: "300",
        margin: 'auto',
    }
    

    
    //Text Styling
    , dayText : {
      margin: '10%',
      fontSize: 15,
    },emptyNumber : {
      color: '#E0EEC6',
    },dayNumber : {
      color: 'white',
    }, currentNumber : {
      color: 'black',
    }
  });
  

  export default styles;