import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Animated } from 'react-native';
import { firebase } from '../../../../firebase.js';

//styling
import Mainstyles from '../../../../styling/AppStyle';
import styles from '../../../../styling/TransactionStyle';



import NetInfo from "@react-native-community/netinfo";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function CalendarTransactionDetails({navigation},selectedDate:any) {
    const [TransName, setTransName] = useState("");
    const [TransDate, setTransDate] = useState("");
    const [TransCategory, setTransCategory] = useState("");
    const [TransAmount, setTransAmount] = useState("");
    // const [TransTime, setTransTime] = useState("");
    const [TransAccName, setTransAccName] = useState("");



    const add_Transaction = () => {
        console.log("Transaction addition attempt made");

        //check network connection    
            
            const subScribe = NetInfo.addEventListener(state => {
                console.log("Connection type", state.type);
                console.log("Is connected?", state.isConnected);

                if (state.isConnected){
                    //if there is internet, try to connect.
                    firebase.firestore()
                    .collection("users")
                    .doc(TransName)
                    .set({
                        name: TransName,
                        date: TransDate,
                        category: TransCategory,
                        amount: TransAmount,
                        account_name: TransAccName,
                    })
                    .then(() => {
                        console.log("Document written");
                    })
                    .catch((error) => {
                        console.log("Document was not written\nError: ", error);
                    });
                }else{
                    console.log('Device is not connected to the internet')
                }
            });

            // Subscribe
            subScribe();

    };

    return (
      <View style = {[Mainstyles.pageContainer, Mainstyles.backgroundStyle]}> 
        <View style = {[styles.sectionContainer]}>

            <View style= {styles.topButton}>
                <Pressable style = {[styles.topButtonStyle]} onPress={() => navigation.goBack()}> 
                    <Text>{'<-'}</Text> 
                </Pressable>
            </View>

            <Text style = {Mainstyles.headerText}> Transaction Details</Text>

            <View style = {[styles.transactionInputContainer, Mainstyles.border]}> 
        
            {/* This is a standard React Native component used to take user input on text.  The onChangeText 
                simply sets the Transaction variable to the value of whatever is in the TextInput field in realtime.
                
                I use three of these fields here, so the user can input a transaction name, category, and amount*/}
                <View style = {styles.entryBlock}>
                    <Text style = {styles.entryFieldTitle}> Vendor Name*:</Text>
                    <TextInput style = {styles.ActionInputLarge}
                            //placeholder = "Transaction Name"
                            //placeholderTextColor = "black"
                            onChangeText = {(name) => setTransName(name)}
                    />    
                </View>

                <View style = {styles.entryBlock}>
                
                    <View style = {{flexDirection:'row'}}>
                        <View style = {styles.entryBlockHalf}>
                            <Text style = {styles.entryFieldTitle}> Amount*:</Text>
                            <TextInput style = {styles.ActionInputSmallLeft}
                                    //placeholder = "Amount"
                                    //placeholderTextColor = "black"
                                    keyboardType = "decimal-pad"
                                    onChangeText = {(amount) => setTransAmount(amount)}
                            />
                        </View>
                        
                        <View style = {styles.entryBlockHalf}>
                            <Text style = {styles.entryFieldTitle}> Date*:</Text>
                            <TextInput style = {styles.ActionInputSmallRight}
                                    //placeholder = "Amount"
                                    //placeholderTextColor = "black"
                                    keyboardType = "decimal-pad"
                                    onChangeText = {(date) => setTransDate(date)}
                            />
                        </View>
                    </View>
                    
                </View>

                <View style = {styles.entryBlock}>
                    <Text style = {styles.entryFieldTitle}> Category:</Text>
                    <TextInput style = {styles.ActionInputLarge}
                            //placeholder = "Transaction Name"
                            //placeholderTextColor = "black"
                            onChangeText = {(name) => setTransCategory(name)}
                    />    
                </View>   

                <View style = {styles.entryBlock}>
                    <Text style = {styles.entryFieldTitle}> Account Name:</Text>
                    <TextInput style = {styles.ActionInputLarge}
                            //placeholder = "Transaction Name"
                            //placeholderTextColor = "black"
                            onChangeText = {(name) => setTransAccName(name)}
                    />    
                </View>     

                <View style = {styles.entryButtonBlock}>
                    <Pressable style = {styles.entryButton}
                                onPress = {add_Transaction}>
                        <Text style = {styles.entryButtonText}> Save Transaction</Text>
                    </Pressable>
                </View>

          {/* <Pressable onPress = {() => console.log(TransName)}
                      style = {styles.button}>
                      
                      <Text style = {styles.buttonText}>Press me to display contents of the transaction name variable</Text>
          </Pressable>     */}
            </View>
        </View>
      </View>
    );
}
