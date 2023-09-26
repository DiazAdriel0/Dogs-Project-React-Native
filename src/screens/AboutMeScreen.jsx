import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NavBar from '../components/NavBar'

const AboutMeScreen = ({ navigation }) => {
  return (
    <>
      <NavBar navigation={navigation} />
      <View style={styles.container}>
        <Text>About Me Screen</Text>
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

export default AboutMeScreen
