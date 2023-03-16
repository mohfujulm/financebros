import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    sectionContainer : {
        paddingTop: '2%',
        paddingBottom: '5%',
    },

    //graphs
    graphContainer : {
        height: Dimensions.get('window').height,
        // backgroundColor: 'black',
    },
    graphComponent : {
        width: Dimensions.get('window').width*.88,
        height: '38%',
        marginBottom: '4%',
        marginHorizontal: '6%',
        backgroundColor: '#CAF5E0',
    },
    graphHeader : {
        fontSize: 20,
    },


    //Header
    header :{
        height: Dimensions.get('window').height*.2,
        marginBottom: '1%',
    },
    sortSection : {
        width: '100%',
    },
    sortButton : {
        marginLeft: 10,
        marginTop: 14,
        width: '15%',
        height: '50%',
        backgroundColor: '#42A998',
    }, 
    sortText : {
        color: 'black',
        fontWeight: '400',
        fontSize: 14,
    },
    buttonText: {
        fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
        color: 'white',
        fontSize: 11,

    }
  });

  export default styles;