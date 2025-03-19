//desestrucutracion

//para evitar el error de la desestructuracion convalores por defecto
//en types cru
interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?:string;
}


export const person:Hero = {
    name: 'Yony',
    age: 45,
    codeName: 'Ironman'
}
//la deses para tomar rapidamentte propeidades, vlores de un arreglo,
//sin hacer referencia al mismo objeto
//esta es la sintaxis, entre llaves, se ponen en este caso
//el nombre de las prppiedades que queremos recuperar
//e java se puede poner valores por defecto, en tyoes nel
//const { name, age, power = 'No tiene poder'} = person; //puede ser un objeto o un array



//normal, ta chafa
//console.log(person.name)
//console.log(person.age)
//console.log(person.codeName)

