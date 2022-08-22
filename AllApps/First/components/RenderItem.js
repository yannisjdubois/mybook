import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../theme/style'


const RenderItem = ({item}) => {

    const openApp = () => { 
        console.log("openApp")
     }

  return (
    <TouchableOpacity onPress={openApp} style={styles.content}>
      <Text style={styles.titre}>{item.titre}</Text>
    </TouchableOpacity>
  )
}

export default RenderItem