import { StyleSheet, Dimensions, Platform } from "react-native";


const styles = StyleSheet.create({
    sectionContainer : {
      width: Dimensions.get('window').width,
      height: 'auto',
      paddingHorizontal: '5%',

    },

    profileSection: {
      width: '100%',
      height: 250,
      marginTop: '5%',
      marginBottom: '9%',
    },
    imageContainer: {
      width: Dimensions.get('window').width*.4,
      height: Dimensions.get('window').width*.4,
      borderRadius: 50,
      backgroundColor: 'white',
      margin: '5%',
    },
    imageStyle : {
      borderRadius: 50,
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain',
    },



    //button container
    buttonContainer : {
      flex: 2,
      marginHorizontal: '5%',
      width: '80%',
      height: 400,
      backgroundColor: '#cce3de',
      padding: '4%',
    },
    buttonStyle : {
      marginTop: '5%',
      width: '60%',
      height: '10%',
      backgroundColor: 'white',
      marginBottom: '10%',
      borderRadius: 20,
    },
    buttonText : {
      fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
      fontSize: 15,
      color: '#032329',
    },


    //delete container
    deleteContainer : {
      marginTop: '20%',
      width: '80%',
      height: '20%',
    },
    delButtonStyle : {
      marginTop: '30%',
      width: '50%',
      height: '10%',
      backgroundColor: 'white',
      borderRadius: 20,
    },
    
  });

  export default styles;