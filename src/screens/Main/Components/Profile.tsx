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
      <View style = {styles.transactionInputContainer}> 
  
        {/* This is a standard React Native component used to take user input on text.  The onChangeText 
            simply sets the Transaction variable to the value of whatever is in the TextInput field in realtime.
            
            I use three of these fields here, so the user can input a transaction name, category, and amount*/}
          
            <View style = {styles.transactionSubcontainer}>
              <TextInput style = {styles.ActionInputLarge}
                        placeholder = "Transaction Name"
                        placeholderTextColor = "black"
                        onChangeText = {(name) => setTransName(name)}
              />
            </View>
        
            <View style = {styles.transactionSubcontainer}>
              <TextInput style = {styles.ActionInputSmall}
                        placeholder = "Date"
                        placeholderTextColor = "black"
                        onChangeText = {(name) => setTransDate(name)}
              />
              
              <TextInput style = {styles.ActionInputSmall}
                        placeholder = "Time"
                        placeholderTextColor = "black"
                        onChangeText = {(name) => setTransTime(name)}
              />
            </View>

            <View style = {styles.transactionSubcontainer}>
              <TextInput style = {styles.ActionInputSmall}
                        placeholder = "Amount"
                        placeholderTextColor = "black"
                        keyboardType = "decimal-pad"
                        onChangeText = {(name) => setTransAmount(name)}
              />
              
              <TextInput style = {styles.ActionInputSmall}
                        placeholder = "Category"
                        placeholderTextColor = "black"
                        onChangeText = {(name) => setTransCategory(name)}
              />
            </View>

            <View style = {styles.transactionSubcontainer}>
              <TextInput style = {styles.ActionInputLarge}
                        placeholder = "Account Name"
                        placeholderTextColor = "black"
                        onChangeText = {(name) => setTransAccName(name)}
              />
            </View>
      

            

        {/* <Pressable onPress = {() => console.log(TransName)}
                    style = {styles.button}>
                    
                    <Text style = {styles.buttonText}>Press me to display contents of the transaction name variable</Text>
        </Pressable>     */}

      </View>
    );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: "2%",
    // this is to help me visualize flex boxes because my little monkey brain can't comprehend how it works without clear visual indicators //
    //borderWidth: 5,
    //borderColor: 'green',
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    flex: 1,
  },
  // transactionWindow: {
  //   marginTop: 50,
  //   //justifyContent: "center",
  //   // this is to help me visualize flex boxes because my little monkey brain can't comprehend how it works without clear visual indicators //
  //   //borderWidth: 5,
  //   //borderColor: 'red',
  //   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // },
  transactionInputContainer: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: "center",
    // this is to help me visualize flex boxes because my little monkey brain can't comprehend how it works without clear visual indicators //
    //borderWidth: 5,
    //borderColor: 'red',
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  },
  transactionSubcontainer: {
    flex: 0.05,
    flexDirection: 'row',
    marginTop: "1%",
    justifyContent: "center",
    // this is to help me visualize flex boxes because my little monkey brain can't comprehend how it works without clear visual indicators //
    //borderWidth: 5,
    //borderColor: 'green',
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  },

  ActionInputLarge: {
    backgroundColor: "white",
    borderRadius: 3,
    width: "82%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    elevation: 8,
    padding:4,
  },

  ActionInputSmall: {
    backgroundColor: "white",
    borderRadius: 3,
    width: "40%",
    height: "100%",
    marginLeft: "1%",
    marginRight: "1%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    elevation: 8,
    padding:4,
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