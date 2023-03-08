import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Animated } from 'react-native';

function Profile() {
    const [TransName, setTransName] = useState("");
    const [TransDate, setTransDate] = useState("");
    const [TransCategory, setTransCategory] = useState("");
    const [TransAmount, setTransAmount] = useState("");
    const [TransTime, setTransTime] = useState("");
    const [TransAccName, setTransAccName] = useState("");

    return (
      <View style = {styles.sectionContainer}> 

        <Text style = {styles.title}> Transaction Details</Text>

        <View style = {styles.transactionInputContainer}> 
    
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

          {/* <Pressable onPress = {() => console.log(TransName)}
                      style = {styles.button}>
                      
                      <Text style = {styles.buttonText}>Press me to display contents of the transaction name variable</Text>
          </Pressable>     */}

        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: "2%",
    backgroundColor: 'lightgreen',
    alignItems: "center",
    justifyContent: "center",
    
    //borderWidth: 2,
    //borderColor: 'red',
  },

  title: {
    marginBottom: '2%',
    fontSize: 25,
    fontWeight: '700',
  },

  transactionInputContainer: {
    flex: 0.6,
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 15,
    elevation: 3,
    padding: '5%',
    
    //borderWidth: 2,
    //borderColor: 'blue',
  },

  entryBlock: {
    flex: 0.15,
    marginBottom: '2%',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  entryBlockHalf: {
    flex: 0.5,
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'green',
  },

  entryFieldTitle: {
    fontSize: 15,
    fontWeight: '600',
  },

  ActionInputLarge: {
    backgroundColor: "lightgrey",
    borderRadius: 15,
    marginTop: '1%',
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    elevation: 2,
    //padding:4,
  },

  ActionInputSmallLeft: {
    backgroundColor: "lightgrey",
    borderRadius: 15,
    marginTop: '1%',
    marginRight: '1%',
    width: "98%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    //flexDirection: "row",
    elevation: 2,
    //padding:4,
  },

  ActionInputSmallRight: {
    backgroundColor: "lightgrey",
    borderRadius: 15,
    marginTop: '1%',
    marginLeft: '1%',
    width: "98%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    //flexDirection: "row",
    elevation: 2,
    //padding:4,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%',
    backgroundColor: 'white',
    width: '45%',
    height: '5%',
    borderRadius: 4,
    elevation: 7
  },

  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Profile;