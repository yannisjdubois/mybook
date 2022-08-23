import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Tuto = () => {
    const [getNombres, setNombres] = useState([1,2,3,4,5,6,7,8,9,10])

    const addNombres = () =>{
        console.log("addNombres", getNombres.length+1)
        const tempNombres = [
            ...getNombres,
            getNombres.length+1
        ]
        setNombres(tempNombres)

      }
      
  return (
    <FlatList
    ListHeaderComponent={
        <Button
            onPress={addNombres}
            title='Add'
        />}
        data={getNombres}
        renderItem = { ({item}) =>
            <Text>{item}</Text>
        }
        keyExtractor = {item=>item}
    />
  )
}

export default Tuto