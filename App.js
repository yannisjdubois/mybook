import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './AllApps/First';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <FirstScreen/>
  )
}

export default App

const styles = StyleSheet.create({})