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

export const registerAction = async (fullName : String, email:string, password:string
):Promise<LoginError| LoginSuccess>=>{
    try{
        const {data} = await tesloApi.post<AuthResponse>('/auth/register',{
            fullName,
            email,
            password
            })

            return{
                ok:true,
                user: data.user,
                token: data.token,
                
    
            }
    }catch(error){
        if(isAxiosError(error) && error.response?.status === 400){ //si es un error de axios
                        return {
                            ok: false,
                            message: 'usuario o correo ya existe'
                        }
                }
                console.log(error) 
                throw new Error('No se pudo realizar la peticion')
        
    }
}