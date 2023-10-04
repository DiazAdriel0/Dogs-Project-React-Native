import React from 'react'
import { StyleSheet, View, TextInput, Image } from 'react-native'
import glassDog from './../../assets/glass-dog.png'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Search a breed' />
      <Image source={glassDog} style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c9e4fd',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    flexDirection: 'row',
    marginVertical: 30,
    marginHorizontal: 15
  },
  input: {
    height: 50,
    width: 200
  },
  icon: {
    height: 30,
    width: 30
  }
})

export default SearchBar
