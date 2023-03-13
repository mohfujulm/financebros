import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Animated } from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import Mainstyles from '../../../../styling/AppStyle';
import styles from '../../../../styling/MetricsStyle';



function LineGraph() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Rainy Days"] // optional
      };
      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
  return(
    <View style={[styles.graphComponent, Mainstyles.border]}>
        <LineChart
            data={data}
            width={350}
            height={220}
            chartConfig={chartConfig}
        />  
    
</View>
    );
}

function CircleGraph(){
    const data = [
        {
          name: "Seoul",
          population: 21500000,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Toronto",
          population: 2800000,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Beijing",
          population: 527612,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "New York",
          population: 8538000,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Moscow",
          population: 11920000,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];
      const chartConfig = {
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      };
  return(
    <View style={[styles.graphComponent, Mainstyles.border]}>
        <PieChart
            data={data}
            width={350}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"5"}
            center={[10, 10]}
            absolute
        />
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
      <View style = {[Mainstyles.pageContainer, Mainstyles.backgroundStyle]}> 
        <View style = {styles.sectionContainer}>
          <Text style = {[Mainstyles.headerText, Mainstyles.centerText]}>Spending Summary</Text>
        
          <LineGraph />
          <CircleGraph />
          <SortContainer />

        </View>
      </View>
    );
}
