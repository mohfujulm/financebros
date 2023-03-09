import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    mainContainer:{
        // position: 'absolute',
        height: '100%',
        backgroundColor: '#485150',
    },
    welcomeContainer:{
        width: '100%',
        height: '15%',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        backgroundColor: '#F1F7ED',
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
        backgroundColor: '#7CA982',
        margin: 10,
        width: '30%',
        height: '10%',
        borderRadius: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,

    },buttonText :{
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
    
    flexCol :{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    contentContainer : {
        width: '100%',
        height: '85%',
    },

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
    bottomButton : {
        bottom: '-10%',
        alignContent: 'center',
        width: '40%',
        height: '6%',
    },bottombuttonText : {
        fontSize: 20,
    }
    
  
  });
  
  export default styles;