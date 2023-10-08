import React from 'react'
import { View, ScrollView } from 'react-native'
import Card from './Card'
import usePagination from '../hooks/usePagination'

const Cards = () => {
  const { currentPageDogs } = usePagination()

  return (
    <View>
      <ScrollView>
        {currentPageDogs.length &&
          currentPageDogs.map(
            (dog) => dog.name && <Card key={dog.id} dog={dog} />
          )}
      </ScrollView>
    </View>
  )
}

export default Cards
