import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { StyleSheet, View, Text, Pressable, Animated, ActivityIndicator } from 'react-native';
import { firebase } from '../firebase.js';


//https://reactnavigation.org/docs/typescript/
//need to figure out TypeScript bullshit (still functional without it)

export default function Starter(): JSX.Element{
  const [users, setUsers] = useState([]); // Initial empty array of users
  const [loading, setLoading] = useState(true);

  //sample data retrieval with firebase shown below:
  //accesses the firestore database, finds the collection named 'users', and pulls every document in the collection and stores it in the 'users' array as JSON
  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        const users = [];
  
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          })
        })
        setUsers(users);
        setLoading(false);
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

    //press the button below to display console log of the data pulled
    //the <text> block shows how to access the data pulled from Firestore
  return (
    <View>
      <View style={styles.MainContainer}>
        
        
        <Text style = {styles.sectionTitle}>Information from first two entries of the Firestore database: </Text> 

        <Text style = {styles.bodyText}>{'\n'} [ User: { users[0].username }, Pass: { users[0].password } ] </Text>
        <Text style = {styles.bodyText}>{'\n'} [ User: { users[1].username }, Pass: { users[1].password } ] </Text>

        <Pressable onPress = {() => console.log(users)}
                    style = {styles.button}>
                    
                    <Text style = {styles.buttonText}>Press me to display contents of the 'users' collection from Firestore in the console</Text>

        </Pressable>

      </View>
  </View>
  );
}

const styles = StyleSheet.create({
 
  MainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'pink',
    alignItems: 'center',
  },

  sectionTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
  },

  bodyText: {
    fontSize: 16,
  },

  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '8%',
    backgroundColor: 'white',
    width: '45%',
    height: '7%',
    borderRadius: 4,
    elevation: 7
  },

});
