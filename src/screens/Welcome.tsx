import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Animated, ActivityIndicator, TextInput } from 'react-native';
import { firebase } from '../firebase.js';




export default function Welcome ():JSX.Element {
    //components
    function LoginScreen () :JSX.Element{
    
    
        return(
            <View style={[styles.mainContainer, styles.flexCol]}>
                <View style={[styles.welcomeContainer, styles.flexCol]}>
                    <Text style = {styles.h1}>Welcome</Text>
                </View>
                <View style={[styles.flexCol, styles.contentContainer]}>
                    <View style={[styles.contextField, styles.flexCol]}>
                        <TextInput style= {[styles.textInputStyle, styles.emailStyle]} placeholder="Email: " placeholderTextColor="#000"/>
                            <TextInput style= {[styles.textInputStyle, styles.passwordStyle]} placeholder="Password: " placeholderTextColor="#000"/>
                        <Pressable style = {styles.buttonStyle} onPress={()  => submitLogin(true)}> 
                        <Text>Login</Text>
                        </Pressable>

                    </View>
                        
                    <Pressable style = {[styles.buttonStyle, styles.bottomButton]} onPress={() => createAccount(false)}> 
                        <Text>Create Account</Text>
                    </Pressable>    

                </View>
                

            </ View>
        );
    }
    function AccountScreen (): JSX.Element {
        return(
            <View style={[styles.mainContainer]}>
                <View style= {styles.topButton}>
                <Pressable style = {[styles.topButtonStyle]} onPress={() => createAccount(true)}> 
                    <Text>Back</Text> 
                </Pressable>
                </View>
                
                <View style={[styles.contextField, styles.flexCol]}>
                    
                        <TextInput style= {[styles.textInputStyle, styles.emailStyle]} placeholder="Email: " placeholderTextColor="#000"/>
                        <TextInput style= {[styles.textInputStyle, styles.passwordStyle]} placeholder="Password: " placeholderTextColor="#000"/>
                        <TextInput style= {[styles.textInputStyle, styles.passwordStyle]} placeholder="Confirm Password: " placeholderTextColor="#000"/>
                    <Pressable style = {styles.buttonStyle} > 
                        <Text>Create Account</Text>
                    </Pressable>
                </View>
                
            </ View>
        );
    }


    const [account, createAccount ]= useState(true);
    const [login, submitLogin] = useState(false);
    let Screen:JSX.Element = <LoginScreen />;
    
    if(account){
        Screen = <LoginScreen />
        console.log(account, Screen)
    }else{
        Screen = <AccountScreen />
        console.log(account, Screen)
    }

    return(
        <View>
            {Screen}
        </View>
        
    );
}


const styles = StyleSheet.create({
    mainContainer:{
        height: '100%',
        backgroundColor: 'lightgreen',
    },
    welcomeContainer:{
        width: '100%',
        height: '15%',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        backgroundColor: 'white',
    },
    contextField :{
        width: '100%',
        height: '50%',
        top: '-10%',
    },


    buttonStyle: {
        border: 'black solid 1px',
        backgroundColor: 'white',
        margin: 10,
        width: '30%',
        height: '10%',
        borderRadius: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

    textInputStyle:{
        padding: 20,
        borderRadius: 30,
        border: 'black',
        backgroundColor: 'white',
        margin: 4,
        color: 'black',
        height: 50,
        fontSize: 16,
    },

    emailStyle: {
        width: '60%',
    },
    passwordStyle: {
        width: '60%',
    },
    flexCol :{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1 : {
        fontSize: 30,
    },
    contentContainer : {
        width: '100%',
        height: '85%',
    },

    topButton :{
        margin: '5%',
        width: '30%',
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
    },
    
  
  });
  