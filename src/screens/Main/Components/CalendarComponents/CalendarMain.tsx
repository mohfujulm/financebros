import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Mainstyles from '../../../../styling/AppStyle';
import styles from '../../../../styling/CalendarStyle';


function calcLeapYear (year: any) {
  
  const currentYear:number = year;

  if (((currentYear % 4 == 0) && (currentYear % 100 != 0)) && (currentYear % 400 != 0)){
    return 29;
  }else{
    return 28;
  }
}

function setupCalendar(year: any) {
  let date = new Date(), currentMonth = date.getMonth(), currentDay = date.getDate();
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  const monthdays = [31, calcLeapYear(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  //iterate over items and add in the appropriate days
  const months:JSX.Element[] = [];
  
  for (let m = 0; m < monthdays.length; m++){
  
    const days:JSX.Element[] = [];

    const firstDay = new Date(year, m, 1).getDay()
    
    let numDays = firstDay+monthdays[m] //add up all the days
    if (!(numDays % 7 === 0)){ //if it isnt divivisble by 7
      numDays = numDays - (numDays % 7)+ 7; //take that amount and subtract it to make it divisible, and go up 1 multiplier
      
    }
    let styler;
      switch(numDays/7){
        case 4:
          styler = styles.containerThree; //height is 25% if there are 4 rows
          break
        case 5:
          styler = styles.containerTwo; //height is 20% if there are 5 rows
          break
        case 6:
          styler = styles.containerOne; //height is 16.7% if there are 6 rows
          break

      }

    for(let i = 0; i< firstDay; i++){
      days.push( <View key={'Month: ' + monthNames[m] + ', Placeholder:' + String(i)} style= {[styler]}></View>)
    }

    for(let d = 1; d< (numDays-firstDay)+1; d++){
      const navigation = useNavigation();
      
      if (d < monthdays[m]+1){
        if (m % 2 == 0){ //every other month change the style
          days.push( <Pressable onPress={() => navigation.navigate('CalendarDayDetails')} key={'Month:' + String(m) + ', Day:' + String(d)} style= {[styler, styles.dayOne]}><Text style ={[styles.dayText, styles.dayOneNumber]}>{String(d)}</Text></Pressable>)
        }else if(d == currentDay && m == currentMonth){ //if its the current month and day, seperate style.
          days.push( <Pressable onPress={() => navigation.navigate('CalendarDayDetails')} key={'Month:' + String(m) + ', Day:' + String(d)} style= {[styler, styles.currentDay]}><Text style ={[styles.dayText, styles.currentNumber]}>{String(d)}</Text></Pressable>)
        }else{
          days.push( <Pressable onPress={() => navigation.navigate('CalendarDayDetails')} key={'Month:' + String(m) + ', Day:' + String(d)} style= {[styler, styles.dayTwo]}><Text style ={[styles.dayText, styles.dayTwoNumber]}>{String(d)}</Text></Pressable>)
        }
      }else{
        days.push( <View key={'Month:' + monthNames[m] + ', Placeholder:' + String(d)} style= {[styler]}></View>)
      }
      
    
    }
    let monthContainer =  <>
                            <View style={[styles.monthTitle, Mainstyles.verticalCenter]}><Text style={[styles.monthText]}>{monthNames[m]}</Text></View>
                            <View style={[styles.monthContainer, Mainstyles.flexCol]}>
                              <View style={[styles.dayContainer,Mainstyles.flexRow]}>{days}</View>
                            </View>
                          </>
    months.push(monthContainer)
    
  }
  return months;
  
}

//component

export default function CalendarMain({navigation}) : JSX.Element {

    return (
      <SafeAreaView>
          
        <View style = {[Mainstyles.pageContainer, Mainstyles.backgroundStyle]}> 
          <View style= {[styles.titleContainer,Mainstyles.flexRow]}>
            <View style = {[styles.titleLabel, Mainstyles.flexCol, Mainstyles.center]}><Text style={[styles.titleText]}>S</Text></View>
            <View style = {[styles.titleLabel, Mainstyles.flexCol, Mainstyles.center]}><Text style={[styles.titleText]}>M</Text></View>
            <View style = {[styles.titleLabel, Mainstyles.flexCol, Mainstyles.center]}><Text style={[styles.titleText]}>T</Text></View>
            <View style = {[styles.titleLabel, Mainstyles.flexCol, Mainstyles.center]}><Text style={[styles.titleText]}>W</Text></View>
            <View style = {[styles.titleLabel, Mainstyles.flexCol, Mainstyles.center]}><Text style={[styles.titleText]}>T</Text></View>
            <View style = {[styles.titleLabel, Mainstyles.flexCol, Mainstyles.center]}><Text style={[styles.titleText]}>F</Text></View>
            <View style = {[styles.titleLabel, Mainstyles.flexCol, Mainstyles.center]}><Text style={[styles.titleText]}>S</Text></View>
          </View>
          <ScrollView  contentOffset={{x:0,y:1000}}contentContainerStyle={[Mainstyles.flexCol, Mainstyles.horizontalCenter]}>
            <View style={[styles.calendarContainer]}>
              
              {setupCalendar(new Date().getFullYear())}
            </View>
            
          </ScrollView>
          <View style = {[styles.footerContainer, Mainstyles.flexCol, Mainstyles.center]}>
            <Pressable onPress={() => {navigation.navigate('CalendarTransactionDetails')}} style = {[styles.addTransaction, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
                <Text style={[styles.buttonText]}>+</Text>
              </Pressable>
          </View>
          
            
        </View>
      
      </SafeAreaView>
    );
}