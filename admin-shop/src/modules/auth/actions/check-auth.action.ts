import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse,  User } from "../interfaces"
import { isAxiosError } from "axios"

interface CheckError {
    ok:false,
}

interface Checksuccess {
    ok: true,
    user: User,
    token:string
}
export const checkAuthAction = async():Promise<CheckError|Checksuccess>=>{
    try{
        //primero verificamos si tenemos el token
        const localToken = localStorage.getItem('token')
        if( localToken && localToken.length < 10){
            return {ok:false}
        }

        //hacemos la peticion al endpoin
        const {data} = await tesloApi.get<AuthResponse>('/auth/check-status')

        return {
            ok:true,
            user: data.user,
            token: data.token //seria un nuevo token , para la viogencia
        }

    }catch(error){
        if(isAxiosError(error) && error.response?.status === 401){
            return {
                ok:false
            }
        }
        throw new Error('No se pudo verificar la sesion ')
    }
}