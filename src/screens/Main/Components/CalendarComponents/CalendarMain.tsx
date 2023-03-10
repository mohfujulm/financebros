import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable} from 'react-native';

import Mainstyles from '../../../../styling/AppStyle';
import styles from '../../../../styling/CalendarStyle';

const currentYear:number = new Date().getFullYear()

let leapYearChange:number;

if (((currentYear % 4 == 0) && (currentYear % 100 != 0)) && (currentYear % 400 != 0)){
  leapYearChange = 29;
}else{
  leapYearChange = 28;
}

function setupCalendar() {
  let date = new Date(), year = date.getFullYear(), month = date.getMonth(), currentDay = date.getDate();
  let firstDay = new Date(year, month, 1).getDay() //gets first date. - 0=Sunday, 6= Saturday
  let isfirst = false;

  const monthdays = [31, leapYearChange, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const pastmonthlength = monthdays[month-1]
  const presmonthlength= monthdays[month];

  //iterate over items and add in the appropriate days
  const days:JSX.Element[] = [];

  for (let i = 0; i < 42; i++){
    let numday = i; //assign start count number
    if (i< firstDay){ //if the day is in the previous month
      //total num days of the last month minus the day the first day will occur 
      //and how many days we've iterated over (starts at 1)
      numday = (pastmonthlength)- (firstDay-(i+1)); 
    }
    if (i >= firstDay) { //if the day is within the month
      isfirst= true;
      numday = i-firstDay+1;
    }
    if(i > (firstDay+(presmonthlength)-1)){ //if ths day is after the last month
      isfirst = false;
      numday = i-(firstDay+presmonthlength)+1;
    }

    if (isfirst && numday != currentDay){
      days.push( <View key={'Day' + String(i)} style= {[styles.container, styles.day]}><Text style ={[styles.dayText, styles.dayNumber]}>{String(numday)}</Text></View>)
    }else if(numday == currentDay && isfirst){
      days.push( <View key={'Day' + String(i)} style= {[styles.container, styles.currentDay]}><Text style ={[styles.dayText, styles.currentNumber]}>{String(numday)}</Text></View>)
    }else{
      days.push( <View key={'Day' + String(i)} style= {[styles.container, styles.empty]}><Text style ={[styles.dayText, styles.emptyNumber]}>{String(numday)}</Text></View>)
    }
    
  }
  return days;
  
}

export default function CalendarMain({navigation}) : JSX.Element {

    return (
      <View style = {[styles.sectionContainer]}> 
        <View style= {[styles.titleContainer,Mainstyles.flexRow]}>
          <View style = {[styles.titleLabel,Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[styles.titleText]}>S</Text></View>
          <View style = {[styles.titleLabel,Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[styles.titleText]}>M</Text></View>
          <View style = {[styles.titleLabel,Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[styles.titleText]}>T</Text></View>
          <View style = {[styles.titleLabel,Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[styles.titleText]}>W</Text></View>
          <View style = {[styles.titleLabel,Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[styles.titleText]}>T</Text></View>
          <View style = {[styles.titleLabel,Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[styles.titleText]}>F</Text></View>
          <View style = {[styles.titleLabel,Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[styles.titleText]}>S</Text></View>
        </View>
        <View style = {[styles.calendarContainer, styles.flexRow]}>
          {setupCalendar()}
        </View>
        <View style = {[styles.footerContainer, Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
          <Pressable onPress={() => {navigation.navigate('CalendarTransactionDetails')}}style = {[styles.addTransaction, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
              <Text style={[styles.titleText]}>+</Text>
            </Pressable>
        </View>
        
          
      </View>
    );
}