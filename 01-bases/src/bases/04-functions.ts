//function greetPerson( name: string ){
  //  return `hola,${name}`;
//
//}

//arrow FUNCTION
//const greetPerson = (name: string) => {
 //   return `hola,${name}`;
//}

//Cuando la funcion solo tiene un return, en el 
//cuerpo se simplifica la sintaxis
//const greetPerson = (name: string) => `hola,${name}`;


//sintaxis simplificada, retornado un objeto,
//si se ve un parentesis despues de unas llabes
//quiere decir el return explicito de un bojeto
//const getUser = (uid: string) => ({
//        uid:  uid,
//        username: 'Tony'
//    });

const heroes = [
    {
        id:1,
        name: 'Batman',
    },
    {
        id:2,
        name: 'Sup',
        power: 'FUerza',
    }
]

const hero = heroes.find((h) => h.id === 1 );


//el signo es ts, verifica si  esta en nulo 
console.log(hero?.power?.toUpperCase());