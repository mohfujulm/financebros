import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Animated } from 'react-native';

import Mainstyles from '../../../../styling/AppStyle';
import styles from '../../../../styling/MetricsStyle';


function LineGraph() {
  return(
    <View style={[styles.graphComponent, Mainstyles.border]}>
      
    </View>
    );
}

function CircleGraph(){
  return(
    <View style={[styles.graphComponent, Mainstyles.border]}>
      
    </View>
    );
}

function SortContainer(){
  let [selected, changeSelected] = React.useState('Week')
  
  
  return(
    <View style= {[styles.sortSection, Mainstyles.flexRight]}>
      <View style={[styles.sortBox, Mainstyles.flexRow, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
        <Text style = {[styles.sortText]}>Sort By:</Text>
        <Pressable style= {[styles.sortButton, Mainstyles.border,Mainstyles.flexCol,Mainstyles.verticalCenter]}><Text style={[Mainstyles.textAlignCenter]}>{selected}</Text></Pressable>
      </View>
    </View>
    
  );
}

export default function MetricsMain() {
    return (
      <View style = {[Mainstyles.pageContainer, styles.mainBackground]}> 
        <View style = {styles.sectionContainer}>
          <Text style = {styles.sectionHeader}>Spending Summary:</Text>
        
          <LineGraph />
          <CircleGraph />
          <SortContainer />

        </View>
      </View>
    );
}
