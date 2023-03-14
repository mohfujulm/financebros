import { StyleSheet, Dimensions, Platform } from "react-native";

const styles = StyleSheet.create({
    sectionContainer : {
        paddingHorizontal: '5%',
        paddingTop: '6%',
        paddingBottom: '5%',
    },

    graphComponent : {
        width: Dimensions.get('window').width*.88,
        height: 300,
        marginBottom: 20,
        marginHorizontal: '6%',
        backgroundColor: '#CAF5E0',
    },graphHeader : {
        fontSize: 20,
    },


    sortSection : {
        width: '100%',
        height: 80,
    },
    sortBox : {
        width: '89%',
        marginTop: '4%',
    },
    sortButton : {
        marginLeft: 10,
        width: '15%',
        height: 22,
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