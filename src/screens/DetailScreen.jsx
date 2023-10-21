import React, { useContext } from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import NavBar from '../components/NavBar'
import { GlobalStateContext } from '../context/Global'

const DetailScreen = ({ navigation }) => {
  const { detailDog } = useContext(GlobalStateContext)

  return (
    <View style={styles.background}>
      <NavBar navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          {detailDog.name && (
            <>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  src={detailDog.image?.url}
                  alt={`${detailDog.name} image`}
                />
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>{detailDog.name}</Text>
                <Text style={styles.subtitle}>Weight:</Text>
                <Text style={styles.infoText}>
                  Imperial: {detailDog.weight?.imperial}
                </Text>
                <Text style={styles.infoText}>
                  Metric: {detailDog.weight?.metric}
                </Text>
                <Text style={styles.subtitle}>Height:</Text>
                <Text style={styles.infoText}>
                  Imperial: {detailDog.height?.imperial}
                </Text>
                <Text style={styles.infoText}>
                  Metric: {detailDog.height?.metric}
                </Text>
                {detailDog.bred_for && (
                  <>
                    <Text style={styles.subtitle}>Bred For:</Text>

                    <Text style={styles.infoText}>{detailDog.bred_for}</Text>
                  </>
                )}
                {detailDog.breed_group && (
                  <>
                    <Text style={styles.subtitle}>Breed Group:</Text>

                    <Text style={styles.infoText}>{detailDog.breed_group}</Text>
                  </>
                )}
                {detailDog.life_span && (
                  <>
                    <Text style={styles.subtitle}>Life Span:</Text>

                    <Text style={styles.infoText}>{detailDog.life_span}</Text>
                  </>
                )}
                <Text style={styles.subtitle}>Temperaments:</Text>
                <Text style={styles.infoText} numberOfLines={3}>
                  {detailDog.temperament}
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e4f2ff',
    height: '100%'
  },
  container: {
    backgroundColor: '#e4f2ff'
  },
  infoContainer: {
    marginVertical: 10,
    paddingHorizontal: 20
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c9e4fd',
    borderRadius: 25,
    padding: 10,
    marginVertical: 10
  },
  image: {
    margin: 10,
    padding: 10,
    width: 330,
    height: 250,
    maxHeight: 250,
    borderRadius: 25
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.5,
    marginTop: 5,
    marginBottom: 2
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  infoText: {
    paddingLeft: 15
  }
})

export default DetailScreen
