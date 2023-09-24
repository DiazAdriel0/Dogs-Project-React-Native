import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import LandingScreen from '../screens/LandingScreen'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'World Of Dogs',
        headerTitleAlign: 'center',
        headerTintColor: '#333', // Color del texto y de los iconos del encabezado
        headerStyle: {
          backgroundColor: '#c9e4fd'
        }
      }}
    >
      <Stack.Screen name='LandingScreen' component={LandingScreen} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator
