import { View, Text, FlatList, Image, Button } from 'react-native'
import React from 'react'
import { dataNews } from '../../Datas/news'
import ItemNews from './components/ItemNews'
import { useState, useEffect } from 'react'
import {apiNews } from './function/api'

const News = () => {
  // Controle de l'état de la FlatList
  const [getNews, setNews] = useState([]) ;

  // Gestion de la pagination
  const [getPage, setPage] = useState(1) ;

  const initNews = async () =>{

    // Chargement de mon API
    const articles = await apiNews(1);

    setNews(articles);

    console.log(articles)
  }

  const nextPage = async () =>{
    //Load more

    setPage( getPage + 1 ) ;

    console.log('page : ' , getPage) ;
  }

  useEffect(()=>{

    
    initNews() ;

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