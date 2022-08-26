import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './AllApps/First/Index';
import Insta from './AllApps/Insta';
import News from './AllApps/AppNews';
// import Tuto from './AllApps/AppNews/TutoFlatList';
import DetailNewScreen from './AllApps/AppNews/components/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        

        <Stack.Screen name="First" component={FirstScreen} />

        { /* News app Screen */}
        <Stack.Screen name="AppNews" component={News} />
        <Stack.Screen name="DetailNewScreen" component={DetailNewScreen} />

        <Stack.Screen name="AppInsta" component={Insta} />
        {/* <Stack.Screen name="AppTuto" component={Tuto} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})