import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { FlatList, Image, View, Text, Pressable, Animated } from 'react-native';

import Mainstyles from '../../../../styling/AppStyle';
import styles from '../../../../styling/TransactionListStyle';


const userData = [
  {
    id: '1', //id for server records
    data: { //data container
      name: 'MTA*LIRR ETIX Ticket', //name of transaction
      amount : 246348.18, //amount transacted
      account : 'Chase Credit Card', //account name
      time: '',
      date : '3/16', //date transaction was made
      category: 'Transit', //category
    }
  },
  {
    id: '2', //id for server records
    data: {
      name: 'boobye', //name of transaction
      amount : 32, //amount transacted
      account : 'Chase', //account name
      date : '3/14', //date transaction was made
      time: '',
      category: 'Profile', //category
    }
  },
  {
    id: '3', //id for server records
    data: { //data container
      name: 'MTA*LIRR ETIX Ticket', //name of transaction
      amount : 212348, //amount transacted
      account : 'Chase Credit Card', //account name
      time: '',
      date : '3/1', //date transaction was made
      category: 'Transit', //category
    }
  },
  {
    id: '4', //id for server records
    data: { //data container
      name: 'MTA*LIRR ETIX Ticket', //name of transaction
      amount : 243.18, //amount transacted
      account : 'Chase Credit Card', //account name
      time: '',
      date : '3/16', //date transaction was made
      category: 'Transit', //category
    }
  },
  {
    id: '5', //id for server records
    data: { //data container
      name: 'MTRR ETIX Ticket', //name of transaction
      amount : 243.18, //amount transacted
      account : 'Chase Credit Card', //account name
      time: '9:00pm',
      date : '3/16', //date transaction was made
      category: 'Transit', //category
    }
  },
  {
    id: '6', //id for server records
    data: { //data container
      name: 'MTA*LIRR ETIX Ticket', //name of transaction
      amount : 243.1, //amount transacted
      account : 'Chase Credit Card', //account name
      time: '',
      date : '3/16', //date transaction was made
      category: 'Transit', //category
    }
  },
  {
    id: '7', //id for server records
    data: { //data container
      name: 'MTA*LIRR ETIX Ticket', //name of transaction
      amount : 243.18, //amount transacted
      account : 'Chase Credit Card', //account name
      time: '',
      date : '3/16', //date transaction was made
      category: 'Transit', //category
    }
  },
  {
    id: '8', //id for server records
    data: { //data container
      name: 'MTA*LIRR ETIX Ticket', //name of transaction
      amount : 23.18, //amount transacted
      account : 'Chase Credit Card', //account name
      time: '',
      date : '3/16', //date transaction was made
      category: 'Transit', //category
    }
  },
  {
    id: '9', //id for server records
    data: { //data container
      name: 'MTA*LIRR ETIX Ticket', //name of transaction
      amount : 3.18, //amount transacted
      account : 'Chase Credit Card', //account name
      time: '11:00am',
      date : '3/16', //date transaction was made
      category: 'Transit', //category
    }
  },
  {
    id: '10', //id for server records
    data: { //data container
      name: 'MTA*LIRR ETIX Ticket', //name of transaction
      amount : 241.18, //amount transacted
      account : 'Chase Credit Card', //account name
      time: '12:00pm',
      date : '3/16', //date transaction was made
      category: 'Transit', //category
    }
  },
  {
    id: '11', //id for server records
    data: { //data container
      name: 'MTR ETIX Ticket', //name of transaction
      amount : 241.18, //amount transacted
      account : 'Chase Credit Card', //account name
      time: '12:00pm',
      date : '3/16', //date transaction was made
      category: 'Transit', //category
    }
  },
  {
    id: '12', //id for server records
    data: { //data container
      name: 'MTR ETIX Ticket', //name of transaction
      amount : 241.18, //amount transacted
      account : 'Chase Credit Card', //account name
      time: '12:00pm',
      date : '3/16', //date transaction was made
      category: 'Transit', //category
    }
  },
]



type ItemProps = {info: TransInfo};

interface TransInfo {
  name : string;
  amount : number;
  account: string;
  time: string;
  date: string;
  category: string;
};

function Transaction (props: ItemProps){
  const info = props.info;
  const navigation = useNavigation();
  

  //variable declarations
  const name = info.name, amount = info.amount, date = info.date;
  let time, category = info.category, account = info.account;
  (info.time == '') ? time = date : time = info.time;
  
  const imgPath = `../../../../assets/images/${category}.png` //need to require, or else. 
  // console.log(info, name)

  return(
    // Time Text
    <View style={styles.transactionPadding}>
      <Text style={styles.timeStamp}>{time}</Text>
      <Pressable 
        onPress={() => navigation.navigate('CalendarTransactionDetails')}
        style={[styles.transactionContainer, Mainstyles.flexRow, Mainstyles.horizontalCenter,]}>
        
        {/* Image Container */}
        <View style={[styles.categoryImage, Mainstyles.verticalCenter]}>
          <Image source={require('../../../../assets/images/profile.png')} style={styles.imageContainer} />
              
        </View>
        
        {/* Title Container */}
        <View style={[styles.titleContainer, Mainstyles.verticalCenter]}>
          <Text style={[styles.transactionTitle]}>{name}</Text>
        </View>
        
        {/* Dollar Amount */}
        <View style={[styles.amountContainer, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
          <Text>${amount}</Text>
          
        </View>
        <View style = {[styles.viewTransBtn, Mainstyles.verticalCenter, Mainstyles.horizontalCenter]}>
              <Text>{String('>')}</Text>
        </View>
      </Pressable>
    
    </View>
  )
}

export default function CalendarDayDetails({navigation}) {
    // console.log(navigation)

    const ListFooter = () =>  {
      return(
        <View style={[]}>

        </View>
      )
    }

    return (
      <View style = {[Mainstyles.backgroundStyle, Mainstyles.pageContainer]}> 
        
        {/* Button */}
        <View style= {Mainstyles.topButton}>
          <Pressable style = {[Mainstyles.topButtonStyle]} onPress={() => navigation.goBack()}> 
              <Text style={[Mainstyles.topButtonText]}>{'<-'}</Text> 
          </Pressable>
        </View>

        {/* Header */}
        <View style= {[styles.headerContainer, Mainstyles.flexRow, Mainstyles.horizontalCenter]}>
          <Text style={[styles.sectionHeader]}>Transactions:</Text>
          <Pressable style = {[styles.sortButton, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]} onPress={() => navigation.goBack()}> 
              <Text>Sort - Time</Text> 
          </Pressable>
        </View>
        
        {/* Render flatlist here.*/}
        <View style ={[Mainstyles.flex]}>
          
          <FlatList 
            data= {userData}
            renderItem = {({item}) => <Transaction info={item.data}/>}
            keyExtractor={item => item.id}
            contentContainerStyle={[Mainstyles.horizontalCenter, {flexGrow: 1} ]}
            ListFooterComponent= {<ListFooter />}
            style={[styles.mainContainer]}
          />
          
        </View>

        {/* Button */}
        <View style = {[styles.footerContainer, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
          <Pressable onPress={() => {navigation.navigate('CalendarTransactionDetails')}}style = {[styles.addTransaction, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
              <Text style={[styles.buttonText]}>+</Text>
            </Pressable>
        </View>
        
      </View>
    );
}

