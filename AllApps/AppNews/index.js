import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { dataNews } from '../../Datas/news'
import ItemNews from './components/ItemNews'

const News = () => {
  return (
    <View>
        <FlatList
            data={dataNews}
            renderItem = { ({item}) =>
            <ItemNews item={item}/>
          }
            keyExtractor = {item=>item.id}
        />
    </View>
  )
}

export default News