//import sirve para impoirtar u elemtno de un modulo
// piezas espectificas 


//la exportacion por defecto es la que no esta entre llaves,
//podemos ponerle cualquier cosa, es lo que definimos textualemte
//con deafult en el otro archivo.
//los owners es como una desesctructuracion 
import heroes, { owners } from "../data/heroes";

export const getHeroById = (id: number) => {
    //si no existe se retorna un objeto vacio
    return heroes.find(hero=> hero.id === id) ?? {};
}

//QUiero todos los elemntos, para eso usa mos gilter
//qiue igual retorna cada elemento que cumpla la condificon
//de la funcion dada.

export const getHeroByOwner = (owner : string) => {
    return heroes.filter(hero => hero.owner === owner)
}

//es undefinied, 
//console.log (getHeroById(1))
console.log (getHeroByOwner('DC'))


