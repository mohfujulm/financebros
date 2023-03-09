import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    sectionContainer: {
      flex: 1,
      paddingHorizontal: '5%',
      paddingTop: '15%',
      paddingBottom: '5%',
    },
    mainBackground : {
      backgroundColor: '#F1F7ED',
    },
  
    title: {
      marginBottom: '2%',
      fontSize: 25,
      fontWeight: '700',
    },
  
    transactionInputContainer: {
      flex: 0.6,
      flexDirection: 'column',
      backgroundColor: 'white',
      width: '100%',
      borderRadius: 15,
      elevation: 3,
      padding: '5%',
      
      //borderWidth: 2,
      //borderColor: 'blue',
    },
  
    entryBlock: {
      flex: 0.15,
      marginBottom: '2%',
      // borderWidth: 1,
      // borderColor: 'red',
    },
    entryBlockHalf: {
      flex: 0.5,
      flexDirection: 'column',
      // borderWidth: 1,
      // borderColor: 'green',
    },
  
    entryFieldTitle: {
      fontSize: 15,
      fontWeight: '600',
    },
  
    ActionInputLarge: {
      backgroundColor: "lightgrey",
      borderRadius: 15,
      marginTop: '1%',
      width: "100%",
      height: "50%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      elevation: 2,
      //padding:4,
    },
  
    ActionInputSmallLeft: {
      backgroundColor: "lightgrey",
      borderRadius: 15,
      marginTop: '1%',
      marginRight: '1%',
      width: "98%",
      height: "55%",
      alignItems: "center",
      justifyContent: "center",
      //flexDirection: "row",
      elevation: 2,
      //padding:4,
    },
  
    ActionInputSmallRight: {
      backgroundColor: "lightgrey",
      borderRadius: 15,
      marginTop: '1%',
      marginLeft: '1%',
      width: "98%",
      height: "55%",
      alignItems: "center",
      justifyContent: "center",
      //flexDirection: "row",
      elevation: 2,
      //padding:4,
    },
  
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
  
    buttonText: {
      fontSize: 12,
      fontWeight: 'bold',
    },
  });

  export default styles;