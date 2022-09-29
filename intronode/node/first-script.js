/*Crear una funcion que reciba un nombre como parametro y devuelba un saludo con dicho nombre 
output => 'Hola (alguien)', buenas noches

*/
function greeting (name){
    return `hello ${name}, buenas noches`;
}
const greetSin = greeting('Sina')
console.log('greetSin');


/*
Crear una funcion que me devuelva un nombre aleatorio de un arreglo
*/

//Declarando una funcion, definiendo

function getNameRandom(){
    const arrayNames = ['Sina','Eco','Beta','Alfa','Coca','Nom']
    const min = 0
    const max = arrayNames.length
    const indexRandom = Math.floor(Math.random() * (max - min) + min)
    return arrayNames[indexRandom]
}
//ejecucion de la funcion
getNameRandom()
console.log('Onteniendo un Nombre Random');

const random = getNameRandom()
console.log(random);
                         // pasando como argumento la ejecucion de una funcion
const firstGreet = greeting (getNameRandom())
const secondGreet = greeting(getNameRandom)

console.log(firstGreet);
console.log(secondGreet);


