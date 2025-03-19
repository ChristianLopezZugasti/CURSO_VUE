import type { GIFResponse } from "../interfaces/gif.response";

const apikey = 'ivXG0HbQ2fR1Ue6TGZTdjwH7w23Hqttp';

//hace una solicitud https, regresa una promesa de tipo response

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
.then( (resp) => resp.json())
.then ( (body: GIFResponse) => {
    console.log('Hola')
    console.log(body.data.images.downsized_medium.url)
})        
.catch( err => console.info(err))
