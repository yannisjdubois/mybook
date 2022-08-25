import { Text, FlatList, Image, Button, ActivityIndicator } from 'react-native'
import React from 'react'
// import { dataNews } from '../../Datas/news'
import ItemNews from './components/ItemNews'
import { useState, useEffect } from 'react'
import {apiNews } from './function/api'

const News = () => {
  // Controle de l'état de la FlatList
  const [getNews, setNews] = useState([]) ;
  const [waiting, setWaiting] = useState(false) ;

  // Gestion de la pagination
  const [getPage, setPage] = useState(1) ;

  const loadNews = async () =>{

    // Chargement de mon API
    const articles = await apiNews(getPage);

    setTimeout(() => {
                      setNews(articles)
                      }, 5000) ;

    

    console.log(articles)
  }

  const nextPage = async () =>{
    //Load more

    setPage( getPage + 1 ) ;
    loadNews() ;

    // console.log('page : ' , getPage) ;
  }

  useEffect(()=>{

    
    loadNews() ;

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