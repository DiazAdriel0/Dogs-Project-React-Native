import React from 'react'
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('LandingScreen')}
      >
        <Text>Go to Landing</Text>
      </TouchableNativeFeedback>
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

export default HomeScreen
