export const person = {
    lastname: "Stark",
    age: 45,
    address:{
        city: 'New Yprk',
        zip: 51324,
        lat:13.235,
        log: 34.56
    }
}// as const; //hace  un objeto de solo lectura

// SE puede cambiar los valores
//person.age = 55;



// Los objetos Se pasa por referencia, los acambios se aplican

//const person2 = person;

// Para hacer una copia podemos hacer un spread
//pero los objetos anidados , se pasan igual por referencia
//const person2 = {...person}

// Para de adevis hacer una copia se usa la siguiente fucnion
const person2 = structuredClone(person);


person2.lastname = 'Parker';

console.log({person});
console.log({person2})