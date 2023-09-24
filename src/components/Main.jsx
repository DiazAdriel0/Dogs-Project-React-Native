import React from 'react'
import { StyleSheet, View } from 'react-native'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-native'
import Landing from '../screens/LandingScreen'
import Home from '../screens/HomeScreen'
import MyStack from './MyStack'
import StackNavigator from '../navigation/StackNavigator'

const Main = () => {
  return (
    <View style={styles.container}>
      <NavBar />
      <StackNavigator />
      <MyStack />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f2ff'
  }
})

export default Main
