import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './theme/style'

const ItemNews = ({item}) => {
  return (
    <View style={styles.content}>
        <View style={styles.viewImg}>

        <Image
            style={styles.image}
            source={item.image}
        />
            
        </View>

        <View style={styles.viewTxt}>

            <Text>{item.titre}</Text>
            <Text></Text>
            <Text>{item.description}</Text>

        </View>

    </View>
  )
}

export default ItemNews