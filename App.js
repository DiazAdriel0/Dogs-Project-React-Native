import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/StackNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
