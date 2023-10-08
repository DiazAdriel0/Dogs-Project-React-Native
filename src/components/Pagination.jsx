import React, { useContext } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native'
import usePagination from '../hooks/usePagination'
import { GlobalStateContext } from '../context/Global'

const Pagination = () => {
  const { pages, totalPages, handleClick, handleClickPrev, handleClickNext } =
    usePagination()
  const { currentPage } = useContext(GlobalStateContext)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={currentPage === 1}
        style={styles.buttons}
        onPress={currentPage > 1 && handleClickPrev}
      >
        <Text>Prev</Text>
      </TouchableOpacity>

      <FlatList
        contentContainerStyle={styles.buttonsContainer}
        data={pages}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.key} onPress={() => handleClick(item)}>
            <View
              style={
                currentPage === item ? styles.activeButton : styles.buttons
              }
            >
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        horizontal
      />

      <TouchableOpacity
        disabled={currentPage === totalPages}
        style={styles.buttons}
        onPress={currentPage < totalPages && handleClickNext}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#e4f2ff'
  },
  buttonsContainer: {
    width: 230,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    backgroundColor: '#e4f2ff'
  },
  buttons: {
    padding: 5,
    margin: 5
  },
  activeButton: {
    padding: 5,
    margin: 5,
    backgroundColor: '#92c4f3'
  }
})

export default Pagination
