import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text} from 'react-native';

const currentYear:number = new Date().getFullYear()

let leapYearChange:number;

if (((currentYear % 4 == 0) && (currentYear % 100 != 0)) && (currentYear % 400 != 0)){
  leapYearChange = 29;
}else{
  leapYearChange = 28;
}

const monthdays = [31, leapYearChange, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function setupCalendar() {
  let date = new Date(), y = date.getFullYear(), m = date.getMonth();
  let firstDay = new Date(y, m, 1).getDay() //gets first date. - 0=Sunday, 6= Saturday
  let isfirst = false;

  const monthdays = [31, leapYearChange, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const pastmonthlength = monthdays[m-1]
  const presmonthlength= monthdays[m];

  //iterate over items and add in the appropriate days
  const days:JSX.Element[] = [];
  
  for (let i = 0; i < 42; i++){
    let numday = i; //assign start count number
    if (i< firstDay){ //if the day is in the previous month
      numday = (pastmonthlength)- (firstDay-i);
    }
    if (i >= firstDay) { //if the day is within the month
      isfirst= true;
      numday = i-firstDay+1;
    }
    if(i > firstDay+presmonthlength){ //if ths day is after the last month
      isfirst = false;
      numday = i-(firstDay+presmonthlength);
    }

    if (isfirst){
      days.push( <View key={'Day' + String(i)} style= {[styles.container, styles.day]}><Text>{String(numday)}</Text></View>)
    }else{
      days.push( <View key={'Day' + String(i)} style= {[styles.container, styles.empty]}><Text>{String(numday)}</Text></View>)
    }
    
  }
  return days;
  
}

function Calendar() : JSX.Element {
    const dayElements = setupCalendar();

    return (
      <View style = {styles.sectionContainer}> 
        <View style= {[styles.titleContainer,styles.flexRow]}>
          <View style = {[styles.titleLabel,styles.flexCol]}><Text>S</Text></View>
          <View style = {[styles.titleLabel,styles.flexCol]}><Text>M</Text></View>
          <View style = {[styles.titleLabel,styles.flexCol]}><Text>T</Text></View>
          <View style = {[styles.titleLabel,styles.flexCol]}><Text>W</Text></View>
          <View style = {[styles.titleLabel,styles.flexCol]}><Text>T</Text></View>
          <View style = {[styles.titleLabel,styles.flexCol]}><Text>F</Text></View>
          <View style = {[styles.titleLabel,styles.flexCol]}><Text>S</Text></View>
        </View>
        <View style = {[styles.calendarContainer, styles.flexRow]}>
          {dayElements}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  flexRow:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },flexCol:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },sectionContainer: {
    width: '100%',
    height: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  calendarContainer: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    width: '100%',
    height: '5%',
    backgroundColor: 'lightgrey',
  },
  container: {
    width: '14.13%',
    height: '15%',
    borderWidth: 1,
    borderColor: 'black',
  },
  empty: {
    backgroundColor: 'lightgreen',
  },
  day: {
    backgroundColor: 'green',
  },
  titleLabel: {
    height: '100%',
    width: '14.13%',
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default Calendar;