import React from 'react'
import { View, /*  Text, */ Image } from 'react-native'

const Card = ({ dog }) => {
  return (
    <View>
      {dog.name && (
        <>
          <View>
            <Image src={dog.image?.url} alt={`${dog.name} image`} />
          </View>
          <View>
            {/* <Text>{dog.name}</Text> */}
            {/* <Text>Weight</Text> */}
            {/* <Text>Imperial Weight: {dog.weight?.imperial}</Text> */}
            {/* <Text>Metric Weight: {dog.weight?.metric}</Text> */}
            {/* <Text>Temperaments: {dog.temperament}</Text> */}
          </View>
        </>
      )}
    </View>
  )
}

export default Card
