import {StyleSheet, Dimensions} from 'react-native'


const styles = StyleSheet.create({

    mainContainer:{
        // position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*.70,
    },
    welcomeContainer:{
        width: '100%',
        height: '15%',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        backgroundColor: '#CAF5E0',
    },
    welcomeText : {
        color: '#485150',
        fontWeight: '400',
        fontSize: 55,
        top: 15,
    },
    contextField :{
        width: '100%',
        height: '50%',
        top: '-10%',
    },


    buttonStyle: {
        backgroundColor: '#42A998',
        margin: 10,
        width: '34%',
        height: '6%',
        borderRadius: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%',

    },
    buttonText :{
        color: '#F1F7ED',
    },

    textInputStyle:{
        paddingLeft: 20,
        borderRadius: 30,
        border: 'black',
        backgroundColor: 'white',
        margin: 4,
        color: 'black',
        height: 50,
        fontSize: 16,
        width: '60%',
    },
    
    contentContainer : {
        width: '100%',
        height: '85%',
    },

    topButton :{
        top: '3%',
        left: '3%',
        margin: '5%',
        width: '100%',
        height: '5%',
    },
    topButtonStyle : {
        border: 'black solid 1px',
        backgroundColor: 'white',
        borderRadius: 50,
        width: '20%',
        height: '100%', //has to have a height or else fucks up.
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },


    footerContainer: {
        width: '100%',
        height: '5%',
        bottom: '15%',
    },
    bottomButton : {
        width: '40%',
        height: '100%',
    },
    bottombuttonText : {
        fontSize: 20,
    }
    
  
  });
  
  export default styles;