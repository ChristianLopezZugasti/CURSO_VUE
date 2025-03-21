import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import  { AuthStatus, type User } from '../interfaces'
import { isAwaitExpression } from 'typescript'
import { loginAction } from '../actions'
import { useLocalStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () => {
   
    //Authenticated, un Authenticates, cheking
    const authStatus = ref<AuthStatus>(AuthStatus.cheking)
    const user = ref<User|undefined>()
    //se va a grabar el token , por defecto es string vacon
    const token = ref(useLocalStorage('token',''))

    const login = async(email: string, password:string) => {
        try{
            const loginResp = await loginAction(email,password)
            if (!loginResp.ok){ //vemos si el ok es false, chafio
                logout()
                return false
            }

            user.value = loginResp.user
            token.value = loginResp.token
            authStatus.value = AuthStatus.Authenticated
        }catch(error){
            
            return logout()
        }
    }


    const logout = () => {
            authStatus.value = AuthStatus.UnAuthenticated
            user.value = undefined
            token.value = ''
            return false
    }

const register = async() => {

}


    return {  
        user,
        token,
        authStatus,

        //Getters
        isChecking: computed(()=> authStatus.value === AuthStatus.cheking),
        isAuthenticated: computed(()=> authStatus.value === AuthStatus.Authenticated),

        //Todo : getter paa saer si es Admin o no 

        username : computed(()=>user.value?.fullName),

        //ACtions
        login,
        register
    }
})
