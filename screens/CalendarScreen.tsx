/* 
Tab 3
*/

import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import styles from '../components/styles';

import { Text, View } from '../components/Themed';

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
