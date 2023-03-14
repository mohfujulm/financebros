import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Pressable, Image, Animated, SafeAreaView } from 'react-native';


import Mainstyles from '../../../../styling/AppStyle';
import styles from '../../../../styling/ProfileStyle';

export default function ProfileMain() {
   

    return (
      <SafeAreaView style = {[Mainstyles.flex]}>
          
        <View style = {[Mainstyles.flex, Mainstyles.pageContainer, Mainstyles.backgroundStyle, Mainstyles.horizontalCenter]}> 
          <ScrollView style= {[Mainstyles.flex, styles.sectionContainer]} 
                      contentContainerStyle={[Mainstyles.horizontalCenter]}
                      alwaysBounceVertical={true}
                      
                      >
            <View style={[styles.profileSection, Mainstyles.horizontalCenter]}> 
              <View style={[styles.imageContainer, Mainstyles.borderRadius]}>
                <Image source={require('../../../../assets/images/profile.png')} style={styles.imageStyle} />
                
              </View>
              <Text style={[Mainstyles.headerText]}>First, Last Name</Text>
            </View>

            
              <View style = {[styles.buttonContainer, Mainstyles.flexCol, Mainstyles.horizontalCenter,Mainstyles.border]}>
                <Pressable style={[styles.buttonStyle,Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[Mainstyles.centerText, styles.buttonText]}>Link Bank Account</Text></Pressable>
                <Pressable style={[styles.buttonStyle,Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[Mainstyles.centerText, styles.buttonText]}>Aesthetics Page</Text></Pressable>
                <Pressable style={[styles.buttonStyle,Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[Mainstyles.centerText, styles.buttonText]}>Logout</Text></Pressable>
                
                <Pressable style={[styles.delButtonStyle,Mainstyles.horizontalCenter, Mainstyles.verticalCenter]}><Text style={[Mainstyles.centerText, styles.buttonText]}>Delete Account</Text></Pressable>
            
              </View>

          </ScrollView>
        
        </View>
      </SafeAreaView>
    );
}
