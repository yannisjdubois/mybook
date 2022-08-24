import axios from "axios" ;

// URL de mon API
const urlApi = 'https://newsapi.org/v2/everything';

// Clé de mon API
const apiKey = "0c7865eb00d041099e3c7d2e1f9b23e8" ;

export const apiNews = async () => {

    // Paramètre d'appel de mon API
    const params = {
        q : 'Apple',
        from : '2022-08-24',
        sortBy : 'popularity',
        apiKey : apiKey,
        page : page,
        pageSize : 10
    }

    const {data} = await axios.get(urlApi,{params:params})

    // console.log('api News', data.articles)

    return data.articles

}