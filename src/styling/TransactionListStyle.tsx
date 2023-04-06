import { StyleSheet, Platform, Dimensions } from "react-native"



const styles  =  StyleSheet.create({
    sectionContainer: {
        flex: 1,
        height: "100%",
        width: "100%",
        padding: '5%',
    },
    mainBackground : {
        backgroundColor: '#F1F7ED',
    },

    // top header
    titlebar: {
        width: '80%'
    },
    sectionHeader: {
        width: '60%',
        height: '40%',
        textAlign: 'right',
        marginVertical: '3%',
    },
    sortButton: {
        width: '30%',
        height: '40%',
        backgroundColor: 'white',
        borderRadius: 40,
        marginBottom: '5%',
    },
    titleText : {
        fontFamily: ( Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'serif',
        color: '#375357',
        fontSize: 26,
    },

    //section styling
    headerContainer: {
        width: '80%',
        height: 60,
        marginHorizontal: '10%',
        // backgroundColor: 'white',
    },
    mainContainer : {
        width: '100%',
        height: ( Platform.OS === 'ios' ) ? Dimensions.get('window').height*0.1 : Dimensions.get('window').height,
    },

    //transaction styling
    transactionPadding: {
        width: '95%',
        height: Dimensions.get('window').height*.1,
        marginBottom: '4%',
    },
    transactionContainer: {
        width: '100%',
        height: '70%',
        borderWidth: 0.5,
        borderRadius: 20,
        backgroundColor: 'white',
    },

    //inner Transaction Styles
    categoryImage : {
        margin: 'auto',
        marginLeft: '2%',
        width: '10%',
        height: '50%',
        backgroundColor: 'grey',
    },
    imageContainer : {
        borderRadius: 50,
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    titleContainer : {
        width: '50%',
        height: '100%',
        borderRightWidth: 2,
        borderColor: 'Black',
        marginLeft: 10,
        
    },
    transactionTitle : {
        fontSize: 14,
    },
    timeStamp : {
        paddingLeft: 15,
    },
    viewTransBtn : {
        width: '3%',
        height: '100%',
        // backgroundColor: 'lightgrey',
    },
    amountContainer : {
        width: '30%',
        height: '100%',
        // backgroundColor: 'grey',
    },


    //top button styles

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