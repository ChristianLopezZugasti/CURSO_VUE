import { tesloApi } from "@/api/tesloApi"
import type  { AuthResponse, User } from "../interfaces"

import { isAxiosError } from "axios"


interface LoginError {
    ok:false,
    message: string
}

interface LoginSuccess {
    ok: true,
    user: User,
    token:string
}
//la funcion va a regresar una promesa de tipo o del otro
export const loginAction =  async(email: string,password:string
    ): Promise<LoginError| LoginSuccess> => {
    try{
        const {data} = await tesloApi.post<AuthResponse>('/auth/login',{
            email,
            password
            }) //esto es la data que vamos a enviar

        return{
            ok:true,
            user: data.user,
            token: data.token,
            

        }
    } catch(error){
        if(isAxiosError(error) && error.response?.status === 401){ //si es un error de axios
                return {
                    ok: false,
                    message: 'usuario o contra incorrecto'
                }
        }
        console.log(error) 
        throw new Error('No se pudo realizar la peticion')

    }
}