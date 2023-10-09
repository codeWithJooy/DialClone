import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./Screens/Login/Login";
import SignUp from './Screens/SignUp/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
 return(
  <NavigationContainer>
   <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Login" component={SignUp} />
   </Stack.Navigator>
  </NavigationContainer>
 )
}