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

    //section styling
    headerContainer: {
        width: '80%',
        height: 60,
        marginHorizontal: '10%',
        // backgroundColor: 'white',
    },
    sectionHeader: {
        width: '60%',
        fontSize: 30,
    },
    sortButton: {
        marginLeft: '10%',
        width: '30%',
        height: '40%',
        backgroundColor: 'white',
        borderRadius: 40,
    },
    mainContainer : {
        width: '100%',
        height: Dimensions.get('window').height,
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
        borderWidth: 1,
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
    topButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    topButton : {
        top: '3%',
        left: '2%',
        width: '15%',
        height: '10%',
    },
    topButtonStyle : {
        backgroundColor: 'white',
        borderRadius: 50,
        height: '40%',
        //has to have a height or else fucks up.
        justifyContent: 'center',
        alignItems: 'center',
    },

    //bottom button styles
    footerContainer: {
        position: 'absolute',
        bottom: '13.42%',
        width: '100%',
        height: '10%',
        // backgroundColor: '#cce3de',
      },
    addTransaction : {
        width: ( Platform.OS === 'ios' ) ? 60 : 50,
        backgroundColor: '#42A998',
        height: ( Platform.OS === 'ios' ) ? 60 : 50,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    

    
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