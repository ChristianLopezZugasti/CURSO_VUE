

//console.log('inicio')
//las promesas se ejecutan despues de que no haya codigo pendiente
//resolve, para cuando se cumplio
//reject, cuando no se cumplio la promesa
//solo se puede llmaara una cez el resolve
//new Promise(( resolve, reject ) => {
    //console.log('Cuerpo de la promesa');

import { getHeroById } from "./07-imp-exp"

    
    //resolve('Mi amigo cumplio')
 //   reject('MI ')
//}).then( (mensaje) => console.log(mensaje))
 // .catch(errormessage => console.log(errormessage))
//  .finally( () => console.log('Fin de la promesa'));
//then si la promesa se cumplio

//console.log('Final')


const getHeroByIdAsync = (id:number) => {
    return new Promise( (resolve,reject) =>{
        setTimeout(() => {
            const hero = getHeroById( id);
            hero ? resolve(hero) : reject('Heroe no encontrado') 
            
            
            
        },1500)
    })
}

getHeroByIdAsync(1)
.then(hero => console.log('el nombre es ',hero))
.catch(message => alert(message))