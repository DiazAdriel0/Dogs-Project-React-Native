import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import NavBar from '../components/NavBar'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <NavBar navigation={navigation} />
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LandingScreen')}>
          <Text>Go to Landing</Text>
        </TouchableOpacity>
      </View>
    </>
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
