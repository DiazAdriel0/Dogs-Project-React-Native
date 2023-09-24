import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LandingScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f2ff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default LandingScreen
