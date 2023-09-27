import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import dogAnimated from './../../assets/landing-dog.gif'

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={dogAnimated} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.subtitle}>Tap on the dog</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f2ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80
  },
  image: {
    height: 280,
    width: 500
  },
  subtitle: {
    fontWeight: 'bold',
    color: '#999'
  }
})

export default LandingScreen
