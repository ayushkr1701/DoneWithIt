import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity, Image, SafeAreaView, TouchableHighlight, TouchableNativeFeedback, Alert } from 'react-native';
import { Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
const{landscape}=(useDeviceOrientation());
  // const handleProcess = () => console.log("Text Pressed")
  return (
    <WelcomeScreen/>

  );
}


