import React, { useContext } from 'react'
import { GlobalStateContext } from '../context/global'
import { View, ScrollView } from 'react-native'
import Card from './Card'

const Cards = () => {
  const { allDogs } = useContext(GlobalStateContext)

  return (
    <View>
      <ScrollView>
        {allDogs.length &&
          allDogs.map((dog) => dog.name && <Card key={dog.id} dog={dog} />)}
      </ScrollView>
    </View>
  )
}

export default Cards
