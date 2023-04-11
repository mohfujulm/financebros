import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Pressable, Animated, Dimensions } from 'react-native';

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



function LineGraph(props:any){
    const selectedSort = props.selectedSort
    console.log(selectedSort)

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          }
        ]
      };
      const chartConfig = {
        backgroundGradientFrom : '#CAF5E0',
        backgroundGradientTo: '#CAF5E0',
        color: (opacity = 300) => `rgba(72, 81, 80, ${opacity})`, // optional
        strokeWidth: 2 // optional
        
      };
  return(
    <View style={[styles.graphComponent, Mainstyles.border, Mainstyles.verticalCenter, Mainstyles.horizontalCenter]}>
        <Text style={[styles.graphHeader]}>Total Spending</Text>
        <LineChart
            data={data}
            chartConfig={chartConfig}
            width={Dimensions.get("window").width*.84}
            height={Dimensions.get("window").height*.24}
        />  
    
</View>
    );
}

function CircleGraph(props:any){
  const selectedSort = props.selectedSort
  console.log(selectedSort)

    const data = [
        {
          name: "Travel",
          population: 21500000,
          color: "#58A4B0",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Food",
          population: 2800000,
          color: "#03B5AA",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Rent",
          population: 527612,
          color: "#037971",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Gym",
          population: 8538000,
          color: "#80ADA0",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Shopping",
          population: 11920000,
          color: "#F1F0CC",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
      ];
      const chartConfig = {
        color: (opacity = 1) => `rgba(3, 35, 41, ${opacity})`,
      };
  return(
    <View style={[styles.graphComponent, Mainstyles.border, Mainstyles.verticalCenter, Mainstyles.horizontalCenter]}>
        <Text style={[styles.graphHeader]}>Top 5 Spending Categories</Text>
        <PieChart
            data={data}
            width={Dimensions.get("window").width*.80}
            height={Dimensions.get("window").height*.268}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"5"}
            hasLegend={true}
            center={[10, 10]}
            avoidFalseZero={true}
        />
    </View>
    );
}



export default function MetricsMain() {
  let [selected, changeSelected] = React.useState('Weekly')
  function SortContainer(props:any){
    const selectedSort = props.selectedSort
    console.log(selectedSort)
    
    return(
      <View style= {[styles.sortSection, Mainstyles.flexRow, Mainstyles.horizontalCenter]}>
          {/* <Text style = {[styles.sortText]}>Sort By:</Text> */}
          <Pressable onPress={() => changeSelected('Daily')} style= {[styles.sortButton, Mainstyles.borderRadius,Mainstyles.flexCol,Mainstyles.verticalCenter]}><Text style={[styles.buttonText, Mainstyles.textAlignCenter]}>Daily</Text></Pressable>
        
          <Pressable onPress={() => changeSelected('Weekly')} style= {[styles.sortButton, Mainstyles.borderRadius,Mainstyles.flexCol,Mainstyles.verticalCenter]}><Text style={[styles.buttonText, Mainstyles.textAlignCenter]}>Weekly</Text></Pressable>
  
          <Pressable onPress={() => changeSelected('Monthly')} style= {[styles.sortButton, Mainstyles.borderRadius,Mainstyles.flexCol,Mainstyles.verticalCenter]}><Text style={[styles.buttonText, Mainstyles.textAlignCenter]}>Monthly</Text></Pressable>
        
          <Pressable onPress={() => changeSelected('Yearly')} style= {[styles.sortButton, Mainstyles.borderRadius,Mainstyles.flexCol,Mainstyles.verticalCenter]}><Text style={[styles.buttonText, Mainstyles.textAlignCenter]}>Yearly</Text></Pressable>
        
      </View>
      
    );
  }
    return (
      <View style = {[Mainstyles.pageContainer, Mainstyles.backgroundStyle]}> 
        <ScrollView style= {[Mainstyles.flex]} 
                contentContainerStyle={[Mainstyles.horizontalCenter, styles.sectionContainer]}
                alwaysBounceVertical={false}
        >
          <View style={[styles.header, Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}>
            <Text style = {[Mainstyles.headerText, Mainstyles.centerText]}>Week of 3/15</Text>
                
            <SortContainer selectedSort={selected}/>  
          </View>
          <View style={[styles.graphContainer]}>
            <LineGraph selectedSort={selected}/>
            <CircleGraph selectedSort={selected}/>
          </View>
        </ScrollView>
      </View>
    );
}
