import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const Card = ({ dog }) => {
  return (
    <View style={styles.container}>
      {dog.name && (
        <>
          <View>
            <Image
              style={styles.image}
              src={dog.image?.url}
              alt={`${dog.name} image`}
            />
          </View>
          <View>
            <Text>{dog.name}</Text>
            <Text>Weight</Text>
            <Text>Imperial Weight: {dog.weight?.imperial}</Text>
            <Text>Metric Weight: {dog.weight?.metric}</Text>
            <Text>Temperaments: {dog.temperament}</Text>
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10
  },
  image: {
    width: 200,
    height: 200
  }
})

export default Card
