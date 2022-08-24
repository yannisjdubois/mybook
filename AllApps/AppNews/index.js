import { View, Text, FlatList, Image, Button } from 'react-native'
import React from 'react'
import { dataNews } from '../../Datas/news'
import ItemNews from './components/ItemNews'
import { useState, useEffect } from 'react'
import {apiNews } from './function/api'

const News = () => {
  // Controle de l'état de la FlatList
  const [getNews, setNews] = useState([]) ;

  const initNews = () =>{
    setNews(dataNews);
  }

  useEffect(()=>{

    // Chargement de mon API

    apiNews() ;

  },[])

  return (
    <View>
        <FlatList
            ListHeaderComponent={
              <Button
                onPress={initNews}
                title="Init News"

              />
            }
            ListEmptyComponent={
              <Text>Pas de news</Text>
            }
            data={getNews}
            renderItem = { ({item}) =>
            <ItemNews item={item}/>
          }
            keyExtractor = {item=>item.id}
        />
    </View>
  )
}

export default News