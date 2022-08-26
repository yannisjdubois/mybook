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
        width : 650,
        height : 100,
        margin : 4,
    },

    viewTxtDescription:{
        fontSize: 13,
    },



    image:{
        width : 100,
        height : 100,
        borderRadius : 50,
    },


        // Style du détail

    contentDetail:{
        backgroundColor: colors.primary,
        padding: 10,
        margin: 10,
        borderRadius:5,
        alignItems: "center",
        // flexDirection : 'row'
    },

    viewImgDetail:{
        width : 100,
        height : 100,
    },

    viewTxtDetail:{
        width : 650,
        height : 150,
        margin : 4,
        alignItems: "center",
    },

    imageDetail:{
        width : 100,
        height : 100,
        borderRadius : 10,
    }



})