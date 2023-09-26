import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import icon from './../../assets/favicon.png'

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Image source={icon} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('CreateScreen')}
        >
          <Text>Create</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('AboutMeScreen')}
        >
          <Text>About Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c9e4fd',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    flexDirection: 'row'
  },
  navButton: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  image: {
    height: 40,
    width: 50
  }
})

export default NavBar
