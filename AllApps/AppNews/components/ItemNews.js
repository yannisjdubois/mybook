import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './theme/style'
import { useNavigation } from '@react-navigation/native';

const ItemNews = ({item}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
        onPress={()=>navigation.navigate("DetailNewScreen", {item})}
        style={styles.content}>

        <View style={styles.viewImg}>

        <Image
            style={styles.image}
            source={{uri:item.image}}
        />
            
        </View>

        <View style={styles.viewTxt}>

            <Text>{item.title}</Text>
            <Text></Text>
            <Text style={styles.viewTxtDescription}>{item.description}</Text>

        </View>

    </TouchableOpacity>
  )
}

export default ItemNews