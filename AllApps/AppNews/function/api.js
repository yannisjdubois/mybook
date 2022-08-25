import axios from "axios" ;

// URL de mon API
const urlApi = 'https://gnews.io/api/v4/search';

// Clé de mon API
const apiKey = "941d04ff3f31176eba635e694f4082c5" ;


// // URL de mon API
// const urlApi = 'https://newsapi.org/v2/everything';

// // Clé de mon API
// const apiKey = "0c7865eb00d041099e3c7d2e1f9b23e8" ;


export const apiNews = async () => {

    // Paramètre d'appel de mon API
    const params = {
        q : 'Martinique',
        lang : 'fr',
        from : '2022-08-24',
        sortBy : 'popularity',
        token : apiKey,
        page : page,
        max : 10,
    }

    const {data} = await axios.get(urlApi,{params:params})

    // console.log('api News', data.articles)

    return data.articles

}