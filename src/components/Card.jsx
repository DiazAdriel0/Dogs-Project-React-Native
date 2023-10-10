import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const Card = ({ dog }) => {
  return (
    <View style={styles.container}>
      {dog.name && (
        <>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              src={dog.image?.url}
              alt={`${dog.name} image`}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{dog.name}</Text>
            <Text style={styles.subtitle}>Weight:</Text>
            <Text>Imperial Weight: {dog.weight?.imperial}</Text>
            <Text>Metric Weight: {dog.weight?.metric}</Text>
            <Text style={styles.subtitle}>Temperaments:</Text>
            <Text style={styles.infoText} numberOfLines={2}>
              {dog.temperament}
            </Text>
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    borderColor: '#00000050',
    borderRadius: 10,
    borderWidth: 0.5
  },
  imageContainer: {
    backgroundColor: '#c9e4fd'
  },
  image: {
    margin: 10,
    width: 140,
    height: 140,
    borderRadius: 25
  },
  infoContainer: {
    marginVertical: 10,
    marginLeft: 10,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.5,
    marginTop: 5,
    marginBottom: 2
  },
  infoText: {
    width: 170,
    paddingRight: 10
  }
})

export default Card
