import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { FlatList, Image, View, Text, Pressable, Animated } from 'react-native';


import Mainstyles from '../../../../styling/AppStyle';
import styles from '../../../../styling/TransactionListStyle';


function Transaction (){
  const navigation = useNavigation();
  return(
    // Time Text
    <View style={styles.transactionPadding}>
      <Text style={styles.timeStamp}>11:00am</Text>
      <Pressable 
        onPress={() => navigation.navigate('CalendarTransactionDetails')}
        style={[styles.transactionContainer, Mainstyles.flexRow, Mainstyles.horizontalCenter,]}>
        {/* Image Container */}
        <View style={[styles.categoryImage, Mainstyles.verticalCenter]}>
          <Image source={require('../../../../assets/images/profile.png')} style={styles.imageContainer} />
              
        </View>
        {/* Title Container */}
        <View style={[styles.titleContainer, Mainstyles.verticalCenter,]}>
          <Text style={[styles.transactionTitle]}>MTA*LIRR ETIX Ticket</Text>
        </View>
        {/* Dollar Amount */}
        <View style={[styles.amountContainer, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
          <Text>$243.18</Text>
          
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
        <View style ={[Mainstyles.horizontalCenter]}>
          
        <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
        </View>
        {/* </FlatList> */}
        <View style = {[styles.footerContainer, Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
          <Pressable onPress={() => {navigation.navigate('CalendarTransactionDetails')}}style = {[styles.addTransaction, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
              <Text style={[styles.buttonText]}>+</Text>
            </Pressable>
        </View>
        
      </View>
    );
}

