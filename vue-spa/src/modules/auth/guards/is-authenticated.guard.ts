import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router"

//a donde voy /de donde vengo //la ufubcib que voy a llmar 
const isAuthenticateGuard = (to:RouteLocationNormalized,
                            from: RouteLocationNormalized,
                            next: NavigationGuardNext) => {

    const userId = localStorage.getItem('userID')
    //to.path es el path donde estuvo el susario, donde venia . la ultima ruta
    //en este caso con lo de la atuh, vamos a ver a donde queria ir, 
    //y como no esta autenticado, lo mdandamos a lgoin, pero guardamos donde iba a ir 
    localStorage.setItem('last-path',to.path)


    //si no se encutrna el userID, se va a ejecutar la funcion
    //next, que va a redirigira al usuario al login
    console.log('pedro')
    console.log(userId)
    if(!userId){
        return next({
            name:'login'
       })
    }
    //sigue con la rta solicitada
    return next()
}


export default isAuthenticateGuard