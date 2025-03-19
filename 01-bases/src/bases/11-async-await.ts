import type  { GIFResponse } from '../interfaces/gif.response';
import { giphyApi } from './10-axios'
 
//una funcion asincrona

//al ahcerlo async, la funcion regresa una promesa
//podemos ejecutar asincrono como si fuera sincrono 
export const getImage = async() => {
    
    //en caso de falla en la respeusta en la funcion asyn , se usan el try catch
    try{
        // await de una provemas, es el valor de la promesa
    //
    const resp = await giphyApi.get<GIFResponse>('/random');

    return resp.data.data.images.downsized_large.url;
    } catch(error){
        throw 'URÑ NO ENCONTRADO' //Al lanzar el erro
        //se regresa una retorna pendiente, entonces ahora
        //definimos el then, en la promesa
    }
    
    
}

//la promesa se mattiene pendiente, definimos el then, para 
//como en las promesas anteriores

getImage().then((url) => console.log({ url }) ) 
          .catch( error => console.log(error))


