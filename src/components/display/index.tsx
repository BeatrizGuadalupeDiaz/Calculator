import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

const Display = ({value}:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  )
}

export default Display
