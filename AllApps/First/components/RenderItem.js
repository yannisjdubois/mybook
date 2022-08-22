import { Text, View, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../theme/style'


const RenderItem = ({item}) => {

    const openApp = () => { 
        console.log("openApp")
     }

  return (
    <Pressable onPress={openApp} style={styles.content}>
      <Text style={styles.titre}>{item.titre}</Text>
    </Pressable>
  )
}

export default RenderItem