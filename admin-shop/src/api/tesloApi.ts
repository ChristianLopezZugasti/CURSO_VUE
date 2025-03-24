import axios from "axios";

const tesloApi = axios.create({
    baseURL: import.meta.env.VITE_TESLO_API_URL
})


//interceptosr en la peticion. Cuando se llame un opeticion request va a hacer esta configuracionb
//y
tesloApi.interceptors.request.use( config =>{

    const token = localStorage.getItem('token')

    if( token ) { //si existe un token, lo manda en la autorizacion 
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
})

export { tesloApi}