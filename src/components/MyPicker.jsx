import React, { useState, useRef } from 'react'
// import { StyleSheet, View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const MyPicker = () => {
  const [value, setValue] = useState('')

  const pickerRef = useRef()

  // function open() {
  //   pickerRef.current.focus()
  // }

  // function close() {
  //   pickerRef.current.blur()
  // }

  return (
    <Picker
      ref={pickerRef}
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
    >
      <Picker.Item label='Java' value='java' />
      <Picker.Item label='JavaScript' value='js' />
    </Picker>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e4f2ff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

export default MyPicker
