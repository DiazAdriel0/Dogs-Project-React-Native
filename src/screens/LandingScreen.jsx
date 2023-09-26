import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>LandingScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
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
