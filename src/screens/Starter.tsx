import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { StyleSheet, View, Text, Pressable, Animated } from 'react-native';
import { firebase } from '../firebase.js';


//https://reactnavigation.org/docs/typescript/
//need to figure out TypeScript bullshit (still functional without it)

export default function Starter(): JSX.Element{
  const [users, setUsers] = useState([]); // Initial empty array of users

  //sample data retrieval with firebase shown below:
  //accesses the firestore database, finds the collection named 'users', and pulls every document in the collection and stores it in the users array as JSON
  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        const users = [];
  
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setUsers(users);
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

    //press the button below to display console log of the data pulled
    return (
      <View>
        <View style={styles.MainContainer}>
          <Button title = "press me to display data in console" onPress = {() => console.log(users)}/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
 
  MainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'pink',
  },
});
