import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderItem = ({item}) => {
  return (
    <View>
      <Text>{item.titre}</Text>
    </View>
  )
}

export default RenderItem

const styles = StyleSheet.create({})