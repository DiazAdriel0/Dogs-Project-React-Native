import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NavBar from '../components/NavBar'
import { GlobalStateContext } from '../context/Global'

const DetailScreen = ({ navigation }) => {
  const { detailDog } = useContext(GlobalStateContext)

  return (
    <>
      <NavBar navigation={navigation} />
      <View style={styles.container}>
        <Text>Detail of {detailDog.name}</Text>
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

export default DetailScreen
