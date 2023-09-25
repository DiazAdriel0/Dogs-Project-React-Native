import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LandingScreen')}>
        <Text>Go to Landing</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
        <Text>Go to Create</Text>
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

export default HomeScreen
