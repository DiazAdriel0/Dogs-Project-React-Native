import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NavBar from '../components/NavBar'

const CreateScreen = ({ navigation }) => {
  return (
    <>
      <NavBar navigation={navigation} />
      <View style={styles.container}>
        <Text>CreateScreen</Text>
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

export default CreateScreen
