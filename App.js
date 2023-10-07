import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/StackNavigator'
import { GlobalProvider } from './src/context/global'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <GlobalProvider>
        <StackNavigator />
      </GlobalProvider>
    </NavigationContainer>
  )
}

export default App
