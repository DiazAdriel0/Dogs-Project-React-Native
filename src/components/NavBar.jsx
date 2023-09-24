import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Constants from 'expo-constants'

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>NavBar</Text>
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
