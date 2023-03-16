import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable, ScrollView, Animated } from 'react-native';

//tooling imports
import { firebase } from '../../../../firebase.js';
import NetInfo from "@react-native-community/netinfo";

//styling
import Mainstyles from '../../../../styling/AppStyle';
import styles from '../../../../styling/TransactionStyle';



//probably will need to make an interface
interface ItemProps { //for dealing with child components that need a usestate passed to it
    //Reference : https://stackoverflow.com/questions/56028635/passing-usestate-as-props-in-typescript
    myVar: boolean;
    setMyVar?: Dispatch<SetStateAction<boolean>>;
}


function MainContainer(props:object) : JSX.Element{
    //take data and render it here.

    //then return it inside of the element.

    return(
        <View style={[styles.mainContainer,Mainstyles.flexCol, Mainstyles.horizontalCenter]}>
            <View style = {[styles.transactionInputContainer, Mainstyles.border]}> 
                <View style= {[styles.infoContainer, Mainstyles.flexRow]}>
                    <View style={[styles.leftinfoContainer, Mainstyles.flexCol]}>
                        <View style={[styles.infoHeader, Mainstyles.flexLeft, Mainstyles.verticalCenter]}> 
                            <Text>MTA*NYCT PAYGO</Text>
                            <Text>Chase Credit Card</Text>
                        </View>
                    </View>
                    <View style={[styles.rightinfoContainer, Mainstyles.flexCol]}>
                        <View style={[styles.infoHeader, Mainstyles.flexRight, Mainstyles.verticalCenter]}> 
                            <Text style={[Mainstyles.headerText]}>3/15</Text>
                            </View>
                    </View>
                </View>

                <View style={[styles.amountHeader]}>   
                    <View style={[Mainstyles.flexRow, Mainstyles.horizontalCenter, Mainstyles.flexSpaceBetween]}>
                        <Text style={[ Mainstyles.paragraphText]}>Category: Travel</Text>
                                             
                        <Text style={[Mainstyles.headerText]}>$3,000</Text>
                                         
                    </View>
                </View>

                <View style={[styles.categoryContainer, Mainstyles.borderRadius, Mainstyles.flexCol, Mainstyles.verticalCenter]}>
                    
                    <View style={[styles.percentContainer, Mainstyles.verticalCenter]}>
                        <View style={[ Mainstyles.flexRow, Mainstyles.horizontalCenter]}>    
                            <View style={[styles.percentText, Mainstyles.flexLeft, Mainstyles.verticalCenter]}>
                                <Text>Daily Spend</Text>
                            </View>
                            <View style={[styles.circleBox, Mainstyles.verticalCenter, Mainstyles.horizontalCenter]}><Text>34%</Text></View>
                        </View>
                    </View>
                    <View style={[styles.percentContainer, Mainstyles.verticalCenter]}>
                        <View style={[ Mainstyles.flexRow]}>
                            <View style={[styles.percentText, Mainstyles.flexLeft, Mainstyles.verticalCenter]}>
                                <Text>Weekly Spend</Text>
                            </View>
                            <View style={[styles.circleBox, Mainstyles.verticalCenter, Mainstyles.horizontalCenter]}><Text>14%</Text></View>
                        </View>
                    </View>
                    <View style={[styles.percentContainer, Mainstyles.verticalCenter]}>
                        <View style={[ Mainstyles.flexRow]}>
                            <View style={[styles.percentText, Mainstyles.flexLeft, Mainstyles.verticalCenter]}>
                                <Text>Yearly Spend</Text>
                            </View>
                            <View style={[styles.circleBox, Mainstyles.verticalCenter, Mainstyles.horizontalCenter]}><Text>18%</Text></View>
                        </View>
                    </View>
                </View>
                
            </View>
            <Pressable style={[styles.buttonStyle,Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
                <Text style={[Mainstyles.centerText, styles.buttonText]}>Edit Transaction</Text>
            </Pressable>
            
        </View>
    );
}

function EditContainer() : JSX.Element {
    const [transaction, setTransaction] = useState({
        "name": '',
        "date": '',
        "category": '',
        "amount" : '',
        "accountName": '',
    });

    const add_Transaction = () => {
        console.log("Transaction addition attempt made");

        //check network connection    
            
            const checkNetwork = NetInfo.addEventListener(state => {
                console.log("Connection type", state.type);
                console.log("Is connected?", state.isConnected);

                if (state.isConnected){
                    //if there is internet, try to connect.
                    firebase.firestore()
                    .collection("users")
                    .doc(transaction.name)
                    .set({
                        name: transaction.name,
                        date: transaction.date,
                        category: transaction.category,
                        amount: transaction.amount,
                        account_name: transaction.accountName,
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
            checkNetwork();

    };
    return(
        /* Main Content Container */
        <View style={[styles.mainContainer,Mainstyles.flexCol, Mainstyles.horizontalCenter]}>
            <Text style = {[Mainstyles.headerText,Mainstyles.centerText]}> Transaction Details</Text>

            <View style = {[styles.transactionInputContainer, Mainstyles.flexCol, Mainstyles.border]}> 

            {/* This is a standard React Native component used to take user input on text.  The onChangeText 
                simply sets the Transaction variable to the value of whatever is in the TextInput field in realtime.
                
                I use three of these fields here, so the user can input a transaction name, category, and amount*/}
            
            {/* Vendor Name */}
                <View style = {[styles.entryBlock]}>
                    <Text style = {[styles.entryFieldTitle]}> Vendor Name<Text style={[styles.redText]}>*</Text>:</Text>
                    <TextInput style = {[styles.ActionInputLarge]}
                            //placeholder = "Transaction Name"
                            //placeholderTextColor = "black"
                            onChangeText = {(name) => setTransaction({...transaction, 'name': name})}
                    />    
                </View>
            {/* Amount + Date */}
                <View style = {styles.entryBlock}>
                
                    <View style = {[Mainstyles.flexRow]}>
                        <View style = {styles.entryBlockHalf}>
                            <Text style = {styles.entryFieldTitle}> Amount<Text style={[styles.redText]}>*</Text>:</Text>
                            <TextInput style = {styles.ActionInputSmall}
                                    //placeholder = "Amount"
                                    //placeholderTextColor = "black"
                                    keyboardType = "decimal-pad"
                                    onChangeText = {(amount) => setTransaction({...transaction, 'amount': amount})}
                            />
                        </View>
                        
                        <View style = {styles.entryBlockHalf}>
                            <Text style = {styles.entryFieldTitle}> Date<Text style={[styles.redText]}>*</Text>:</Text>
                            <TextInput style = {styles.ActionInputSmall}
                                    //placeholder = "Amount"
                                    //placeholderTextColor = "black"
                                    keyboardType = "decimal-pad"
                                    onChangeText = {(date) => setTransaction({...transaction, 'date': date})}
                            />
                        </View>
                    </View>
                    
                </View>
            {/* Category */}
                <View style = {styles.entryBlock}>
                    <Text style = {styles.entryFieldTitle}> Category:</Text>
                    <TextInput style = {styles.ActionInputLarge}
                            //placeholder = "Transaction Name"
                            //placeholderTextColor = "black"
                            onChangeText = {(category) => setTransaction({...transaction, 'category': category})}
                    />    
                </View>   
            {/* Account Name */}
                <View style = {styles.entryBlock}>
                    <Text style = {styles.entryFieldTitle}> Account Name:</Text>
                    <TextInput style = {styles.ActionInputLarge}
                            //placeholder = "Transaction Name"
                            //placeholderTextColor = "black"
                            onChangeText = {(accountName) => setTransaction({...transaction, 'accountName': accountName})}
                    />    
                </View>     
            {/* Button */}
                <View style = {styles.entryButtonBlock}>
                    <Pressable style = {[styles.entryButton,Mainstyles.verticalCenter, Mainstyles.horizontalCenter]}
                                onPress = {add_Transaction}>
                        <Text style = {styles.entryButtonText}> Save Transaction</Text>
                    </Pressable>
                </View>

            {/* <Pressable onPress = {() => console.log(transaction)}
                    style = {styles.button}>
                    
                    <Text style = {styles.buttonText}>Press me to display contents of the transaction name variable</Text>
            </Pressable>     */}

            </View>
    </View>
    );
}


export default function CalendarTransactionDetails({navigation},selectedDate:any) {
    
    const [editTrans, seteditTrans] = useState(true)
    const displayScreen = (editTrans == false) ? <EditContainer/> : <MainContainer />
    

        return (
        <SafeAreaView style = {[Mainstyles.flex]}>
            <View style = {[Mainstyles.pageContainer, Mainstyles.backgroundStyle, Mainstyles.flex,]}> 
                <ScrollView style={[Mainstyles.flex, styles.sectionContainer]}
                        alwaysBounceVertical={true}
                        >
                    {/* Top Button */}
                    <View style= {[Mainstyles.topButton]}>
                        <Pressable style = {[Mainstyles.topButtonStyle]} onPress={() => navigation.goBack()}> 
                            <Text>{'<-'}</Text> 
                        </Pressable>
                    </View>
                    
                    
                    <View style={[Mainstyles.horizontalCenter, styles.transactionContainer]}>
                        {displayScreen}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
