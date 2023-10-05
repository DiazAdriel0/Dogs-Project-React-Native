import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <NavBar navigation={navigation} />
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <View style={styles.container}>
        <Text>HomeScreen</Text>
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
  },
  searchBar: {
    backgroundColor: '#e4f2ff'
  }
})

export default HomeScreen
