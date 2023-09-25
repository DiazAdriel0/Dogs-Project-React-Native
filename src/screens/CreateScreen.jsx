import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreateScreen</Text>
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

export default CreateScreen