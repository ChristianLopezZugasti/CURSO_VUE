 import axios from 'axios';
import { GIFResponse } from '../interfaces/gif.response';

 const apikey = 'ivXG0HbQ2fR1Ue6TGZTdjwH7w23Hqttp';

 //SE puede creaer una instancia de axios
 //

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/',
    params:{
        api_key: apikey
    } 
})


//export default giphyApi;

//queremos hacer una peticion a random 
//pero es de tipo generico,le indicamos el tipo de respuesta
//que es un gif response, y ya podemos usar sus metodos

//giphyApi.get<GIFResponse>('/random')
//.then( resp => console.log(resp.data.data.images.downsized_large.url))
//.catch( err => console.log(err))
  
 