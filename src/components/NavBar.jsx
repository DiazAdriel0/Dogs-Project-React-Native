import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Constants from 'expo-constants'
import Home from '../screens/HomeScreen'
import Landing from '../screens/LandingScreen'

const Stack = createNativeStackNavigator()

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={Home}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen name='Landing' component={Landing} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c9e4fd',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  }
})

export default NavBar
