import React, { useState, useEffect } from 'react';
import { Platform, Dimensions, SafeAreaView, ScrollView, View, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Mainstyles from '../../../../styling/AppStyle';
import styles from '../../../../styling/CalendarStyle';


function calcLeapYear (year: number) {
  return (((year % 4 == 0) && (year % 100 != 0)) && (year % 400 != 0)) ? 29: 28;
}

function setupCalendar(selectedYear: any) {
  let date = new Date(), currentYear= date.getFullYear(), currentMonth = date.getMonth(), currentDay = date.getDate();
  
  const monthNames = ["January", "February", 
                      "March", "April", "May",
                      "June", "July", "August",
                      "September", "October", 
                      "November", "December"
                     ];

  const monthdays = [31, calcLeapYear(selectedYear),
                     31, 30, 31, 30, 31, 31, 30, 31, 
                     30, 31]

  //iterate over items and add in the appropriate days
  const months:JSX.Element[] = [];
  
  for (let m = 0; m < monthdays.length; m++){
  
    const days:JSX.Element[] = [];

    const firstDay = new Date(selectedYear, m, 1).getDay() //get the index of the first day of the month
    
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

    for(let i = 0; i< firstDay; i++){ //push all days not in the month first
      days.push( <View key={'Month: ' + monthNames[m] + ', Placeholder:' + String(i)} style= {[styler]}></View>)
    }

    // push days in the month
    for(let d = 1; d< (numDays-firstDay)+1; d++){
      const navigation = useNavigation();
      
      if (d < monthdays[m]+1){
        if(d == currentDay && m == currentMonth && selectedYear == currentYear){ //if its the current month and day, seperate style.
          days.push( <Pressable onPress={() => navigation.navigate('CalendarDayDetails', {cYear: currentYear, cMonth: m, cDay: d})} key={'Month:' + monthNames[m] + ', Day:' + String(d)} style= {[styler, styles.currentDay]}><Text style ={[styles.dayText, styles.currentNumber]}>{String(d)}</Text></Pressable>)
        }else{
          days.push( <Pressable onPress={() => navigation.navigate('CalendarDayDetails', {cYear: currentYear, cMonth: m, cDay: d})} key={'Month:' + monthNames[m] + ', Day:' + String(d)} style= {[styler, styles.day]}><Text style ={[styles.dayText, styles.dayTwoNumber]}>{String(d)}</Text></Pressable>)
        }
      }else{
        days.push( <View key={'Month:' + monthNames[m] + ', Placeholder:' + String(d)} style= {[styler]}></View>)
      }
      
    }
    //put those days into a container
    let monthContainer =  <View key={'Month:' + monthNames[m]}>
                            <View style={[styles.monthTitle, Mainstyles.center]}>
                              <Text style={[styles.monthText]}>{monthNames[m]}</Text>
                            </View>
                            <View style={[styles.monthContainer, Mainstyles.flexCol]}>
                              <View style={[styles.dayContainer,Mainstyles.flexRow]}>
                                {days}
                              </View>
                            </View>
                          </View>
    //add all the containers into an array.
    months.push(monthContainer)
    
  }
  return months;
  
}



//component
interface viewProps {
  route: any;
  navigation: any;
};

export default function CalendarMain({route, navigation} : viewProps) : JSX.Element {

    //calculate current 
    let curDate = new Date();
    let curYear = curDate.getFullYear();
    let curMonth = curDate.getMonth();
    let increment = (( Platform.OS === 'ios' ) ? Dimensions.get('window').height*.71 : Dimensions.get('window').height*.758)
    let offSetIncrements =  [];
    for (let i = 0; i< 12; i++) offSetIncrements.push(Math.floor(increment*i));
    
    // console.log(increment)
    let curYoffset = curMonth * increment;

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
          <ScrollView  
                snapToOffsets = {offSetIncrements}
                decelerationRate="fast" 
                contentOffset={{x:0,y:curYoffset}} 
                contentContainerStyle={[Mainstyles.flexCol, Mainstyles.horizontalCenter]}
                showsVerticalScrollIndicator={false}
                >
            {/* each unit is around 600 per offset */}
            <View style={[styles.calendarContainer]}>
              
              {setupCalendar('2023')}
            </View>
          </ScrollView>

          {/* Bottom Button */}
          <View style = {[Mainstyles.footerContainer, Mainstyles.flexCol, Mainstyles.center]}>
            <Pressable onPress={() => {navigation.navigate('CalendarTransactionDetails', {editMode: true})}} style = {[Mainstyles.addTransaction, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
                <Text style={[styles.buttonText]}>+</Text>
              </Pressable>
          </View>
          
            
        </View>
      
      </SafeAreaView>
    );
}