import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Animated } from 'react-native';

import Mainstyles from '../../../../styling/AppStyle';
import styles from '../../../../styling/ProfileStyle';

export default function ProfileMain() {
   

    return (
      <View style = {[Mainstyles.pageContainer, Mainstyles.backgroundStyle, Mainstyles.horizontalCenter]}> 
      <View style = {styles.sectionHeader}>
          <Text style= {[Mainstyles.headerText, Mainstyles.centerText]}>Settings</Text>
      </View>
        <View style = {[styles.buttonContainer, Mainstyles.flexCol, Mainstyles.horizontalCenter, Mainstyles.verticalCenter,Mainstyles.border]}>
          <Pressable style={[styles.buttonStyle,Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[Mainstyles.centerText, styles.buttonText]}>Link Bank Account</Text></Pressable>
          <Pressable style={[styles.buttonStyle,Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[Mainstyles.centerText, styles.buttonText]}>Aesthetics Page</Text></Pressable>
          <Pressable style={[styles.buttonStyle,Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[Mainstyles.centerText, styles.buttonText]}>Logout</Text></Pressable>
          
          <Pressable style={[styles.delButtonStyle,Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[Mainstyles.centerText, styles.buttonText]}>Delete Account</Text></Pressable>
      
        </View>
        
      </View>
    );
}
