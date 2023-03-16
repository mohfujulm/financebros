import { StyleSheet, Dimensions, Platform } from "react-native";


const styles = StyleSheet.create({
    sectionContainer: {
      width: Dimensions.get('window').width,
      height: 'auto',
      // padding: '5%',
    },
    mainBackground : {
      backgroundColor: '#F1F7ED',
    },
  
    //Main Container
    mainContainer : {
      width: '100%',
      height: Dimensions.get('window').height*.8,
    },
    transactionContainer : {
      width: '100%',
      height: '80%',
    },
    transactionInputContainer: {
      backgroundColor: 'white',
      width: '85%',
      height: 'auto',
      borderRadius: 10,
      elevation: 4, //controls shadow of the object
      padding: '5%',
      marginTop: '5%',
    },

    //MainContainer Styles
    infoContainer : {
      width: '100%',
      height: '15%',
    },
    infoHeader : {
      width: '100%',
      height: '100%',
      // borderColor: 'light grey',
      // borderWidth: 1,
    },
    amountHeader : {
      height: '15%',
      padding: '5%',
      // borderColor: 'black',
      // borderWidth: 1,
    },
    leftinfoContainer : {
      width: '50%',
    },
    rightinfoContainer : {
      width: '50%',
    },
    categoryContainer : {
      padding: '10%',
      height: 250,
      backgroundColor: '#9EDCBD',
    },
    percentContainer : {
      width: '100%',
      height: '33.3%',
      marginVertical: '3%',
      // backgroundColor: 'lightgrey'
    },
    travelStyle : {
      marginTop: '40%',
    },

    buttonStyle : {
      marginTop: '5%',
      width: '40%',
      height: '8%',
      backgroundColor: 'white',
      marginBottom: '10%',
      borderRadius: 20,
    },
    buttonText : {
      fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
      fontSize: 15,
      color: '#032329',
    },
    circleBox : {
      borderRadius: 50,
      backgroundColor: 'white',
      height: '100%',
      width: '18%',
    },
    percentText: {
      width: '82%',
      height: '80%',
    },


    //Edit Container Styles
    entryBlock: {
      height: 80,
      marginBottom: '2%',
      // borderWidth: 1,
      // borderColor: 'red',
    },
    entryBlockHalf: {
      width: '50%',
      height: 80,
      // borderWidth: 1,
      // borderColor: 'green',
    },
  
    entryFieldTitle: {
      fontSize: 15,
      fontWeight: '600',
    },

    entryButtonBlock: {
      height: 60,
      marginBottom: '2%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      // borderColor: 'blue',
    },

    entryButton: {
      borderRadius: 5,
      elevation: 5,
      marginTop: '3%',
      backgroundColor: '#CAF5E0',
      alignItems: 'center',
      height: '60%',
      width: '50%',
    },

    entryButtonText: {
      fontSize: 15,
      fontWeight: '600',
      marginTop: '3%',
    },
  
    ActionInputLarge: {
      backgroundColor: "lightgrey",
      borderRadius: 10,
      marginTop: '1%',
      width: "100%",
      height: "50%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      elevation: 2,
      padding: 10,
    },
  
    ActionInputSmall: {
      backgroundColor: "lightgrey",
      borderRadius: 10,
      marginTop: '1%',
      marginRight: '1%',
      width: "98%",
      height: "55%",
      alignItems: "center",
      justifyContent: "center",
      //flexDirection: "row",
      elevation: 2,
      padding: 10,
      //padding:4,
    },

    redText: {
      color: 'red',
    },
  

    //not really using this right now. 
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '1%',
      backgroundColor: 'white',
      width: '45%',
      height: '5%',
      borderRadius: 4,
      elevation: 7
    },
  

  });

  export default styles;