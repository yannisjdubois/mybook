import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const styles = StyleSheet.create({
    content:{
        backgroundColor: colors.primary,
        padding : 10,
        margin : 10,
        borderRadius : 5,
        flexDirection : 'row'
    },
    viewImg:{
        width : 100,
        height : 100,
    },
    viewTxt:{
        width : 250,
        height : 100,
        margin : 4,
    },
    image:{
        width : 100,
        height : 100,
        borderRadius : 50,
    }

})