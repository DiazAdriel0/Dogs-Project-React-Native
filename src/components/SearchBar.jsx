import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'
import glassDog from './../../assets/glass-dog.png'
import filterDog from './../../assets/filter-dog.png'
import MyModal from './MyModal'

const SearchBar = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handlePress = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <Image source={glassDog} style={styles.searchIcon} />
      <TextInput style={styles.input} placeholder='Search a breed' />
      <TouchableOpacity onPress={handlePress}>
        <Image source={filterDog} style={styles.filterIcon} />
      </TouchableOpacity>
      {modalVisible ? (
        <MyModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c9e4fd',
    alignItems: 'center',
    justifyContent: 'left',
    height: 50,
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 15
  },
  input: {
    height: 35,
    width: 170,
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: '#e6f3fe'
  },
  searchIcon: {
    height: 25,
    width: 25,
    marginRight: 15,
    marginLeft: 20
  },
  filterIcon: {
    height: 25,
    width: 25,
    marginLeft: 40
  }
})

export default SearchBar
