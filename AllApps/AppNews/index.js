import { Text, FlatList, Image, Button, ActivityIndicator, View } from 'react-native'
import React from 'react'
// import { dataNews } from '../../Datas/news'
import ItemNews from './components/ItemNews'
import { useState, useEffect } from 'react'
import { apiNews } from './function/api'
import RenderEmptyComponent from './components/RenderEmptyComponent'

const News = () => {
  // Controle de l'état de la FlatList
  const [getNews, setNews] = useState([]) ;
  const [waiting, setWaiting] = useState(false) ;

  // Gestion de la pagination
  const [getPage, setPage] = useState(1) ;

  const loadNews = async () =>{

    // Chargement de mon API
    const articles = await apiNews(getPage);

    // Déclenche AcitivityIndicator
    setWaiting(true) ;
    setTimeout(() => {
                      setNews(articles)
                      setWaiting(false) ;
                      }, 2000) ;

    

    console.log(articles)
  }

  const nextPage = async () =>{
    //Load more

    setPage( getPage + 1 ) ;
    loadNews() ;

    // console.log('page : ' , getPage) ;
  }

  useEffect(()=>{

    setWaiting(true) ;
    loadNews() ;

  },[])

  return (
    <View>
        <FlatList
            data={getNews}
            renderItem = { ({item}) =>
            <ItemNews item={item}/>
          }
            keyExtractor = {(item, index) => 'key'+index}

            ListHeaderComponent={
              <Button
                onPress={nextPage}
                title="Next"

              />
            }
            ListEmptyComponent={
              <RenderEmptyComponent waiting = {waiting} />
            }
            ListFooterComponent={<ActivityIndicator/>}
        />
    </View>
  )
}

export default News