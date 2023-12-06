import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './style'

const Display = ({value}:any) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.text} placeholder='0' >{value}</TextInput>
    </View>
  )
}

export default Display
