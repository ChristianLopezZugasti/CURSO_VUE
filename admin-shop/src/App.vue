<template>
  
  <RouterView/>
  <VueQueryDevtools/>
</template>

<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { useAuthStore } from './modules/auth/stores/auth.store';
import { AuthStatus } from './modules/auth/interfaces';
import { useRoute, useRouter } from 'vue-router';



const authStore = useAuthStore()
//maneja la navegacion
const router = useRouter()
//rinfromacion de la ruta
const route = useRoute()



//estamos pendientes de si el estado cambia
//mutation, COntien informacion sobre el cambio realizado en el estado(Que propiedad camnbio=)
//state, es el estado actual
authStore.$subscribe( (Mutation, state) =>{
  //por defecto es cheking, todabia no hacemos ninguna peticion
  if( state.authStatus === AuthStatus.cheking){
      authStore.checkAuthStatus()
      return
  }
  //SI ESTA ATUTENCIADO, Y SE ENCUENTRA EN LOGIN O REGISTER, LO REGRESAMOS A HOME 
  if(route.path.includes('/auth') && state.authStatus === AuthStatus.Authenticated){
    router.replace({name: 'home'})
    return
  }

},{
  immediate: true
} )

</script>