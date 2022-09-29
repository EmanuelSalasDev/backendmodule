//Es un obejto que Representa el resultado de una ejecucion asincrona

                             //Pending/ pendiente      Este es su estado inicial
                    //Estado inicial, aun no se resuelve


    /* o 

    resolved/ resuelta                                         Rejected/ rechazada
    Estado de aceptacion, se eject                Estado de rechazo, ocurrio algun error en la ejecucion
    satistfactoriamente                                         la ejecucion   */

    // constructor

   // new promises()
   //recibe una funcion como parametro (Callback)

    new Promise((resolve, reject) => {
    if('todo cool!!') resolve ('todo excelente!!')
    if('hay un Error') reject ('Paso algo D:')

    })

    /* Resolve (es una funcion)-> al invocarla se cambiara el estado
    de la promesa a resolved
    reject (Es una funcion) -> Al invocarla se cambiara al estado de la promesa a reject*/



    const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
    let error = null
    if (error){
        reject('Ocurrio un error')
    }
    resolve('Todo Cool!! :D')
    }, 2000)
    })

   //console.log(myFirstPromise);

    myFirstPromise
        .then((result)=> {
            console.log('result:', result);
            //cuando sea exitoso.
        })
        .catch ((error) => {
            console.log('Error:', error);
            //cuando ocurre un error.
        })



    /*
        .then(() => {}) // -> Maneja la promesa cuando haya sido exitosa
                            -Recibe un callback
                            -Regresa lo que se pasa en la funcion resolve()
        .catch (() => {} // -> Manjea la promesa cuando haya sido rechazada
                            -Recibe un callback
                            -Regresar lo que pasa en la funcion reject()
   */


    /*  Otra forma promise:
    -Wrapeado por una funcion
    function algoAsincrono(){
    regresa la promesa 
    } */

    function algoAsincrono(){
        return new Promise((resolve, reject) =>{
            setTimeout (() => {
                let error = null
                if (error){
                    reject ('Hubo un error, ayuda ')
                }
                resolve ('Todo Cool!!')
            }, 1000)
        })
    }

    algoAsincrono() //regresa una promesa
    .then ((result) => {
        console.log('Result: ', result);
    }) //Exitosa
    .catch ((error) => {
        console.error('Error: ', error);
    })

    //Ejercicio: hacer las compras

    const cinMakePurchases = {
        name: 'Cin Ruiz',
        atSuperMarket: false,
        paidPantry: false,
        atHome: false
    }

    function goToSuperMarket(personGoToSuperMarket){
        return new Promise ((resolve, reject) => {
            console.log(`${personGoToSuperMarket.name} llendo al supermercado...`);
            setTimeout (()=> {
                personGoToSuperMarket.atSuperMarket = true
                if (!personGoToSuperMarket.atSuperMarket) {
                    reject (`${personGoToSuperMarket.name} no pudo llegar al supermercado`)
                }
                resolve(personGoToSuperMarket)
            }, 3000)
        })
    }

    function payingThings(personToPay) {
        return new Promise ((resolve, reject) => {
            console.log(`${personToPay.name} esta haciendo fila para pagar...`);
            setTimeout (() =>{
            personToPay.paidPantry = true
            if(!personToPay-paidPantry){
                reject(`${personToPay.name} no pudo pagar la despensa`)
            } 
            resolve(personToPay)  
            }, 3000)
        })
        }


    function goToHome(personGoHome){
        return new Promise ((resolve, reject) => {
        console.log(`${personToPay.name} llendo a casa`);
        setTimeout(() =>{
            personGoHome.atHome = true
            if(!personGoHome.atHome) reject (`${personGoHome.name} no pudo llegar a casa`)
            resolve(personGoHome)
        }, 3000)
    })
    }





gotToSuperMarket(cinMakePurchases)
    .then((personAtTheSuperMarket) => {
        console.log(`${personAtTheSuperMarket.name} ya esta en el supermercado`)
//         console.log(personAtTheSuperMarket)
         // 
        payingThings(personAtTheSuperMarket)
            .then((personWithHisThings) => {
                console.log(`${personWithHisThings.name} ya pago su despensa`)
                console.log(personWithHisThings)

                goToHome(personWithHisThings)
                    .then((personAtHome) => {
                        console.log(`${personAtHome.name} ya esta en casa`)
                        console.log(personAtHome)
                    })
                    .catch((error) => {
                        console.error('Error: ', error)
                    })
            })
            .catch((error) => {
    console.error('Error: ', error)
            })
        })
    .catch((error) => {
        console.log('Error: ', error)
        })





    //promise hell

    /* Encadenamiento de promesas */

    goToSuperMarket(cinMakePurchases)
    .then((personAtSuperMarket) =>{
        console.log(`${personAtSuperMarket.name} ya llego al supermercado`);
        console.log(personAtSuperMarket);
        return payingThings (personAtSuperMarket)
    })// regresa otra promesa
    .then ((personWithThings) =>{
        console.log(`${personWithThings.name} ya paso su despensa`);
        console.log(personWithThings);
        return goToHome(personWithThings)
    })// regresa otra promesa
    .then((personAtHome) =>{
        console.log(`${personAtHome.name} ya esta en casa`);
        console.log(personAtHome);
    })
    .catch ((error) =>{
        console.error('Error: ', error)
    })
    // Es más bonita 😃

    /*
    async / await
    async -> Marcar una función como asincrona
    await -> Esperar el resultado de una promesa
    Condiciones: 
        - Para usar AWAIT necesitamos una función que marcaremos como asyncrona
        Donde utilizo await necesitamos marcar la función que la contiene como asincrona
        - Las funciones marcadas como async, por defecto regresan una promesa
*/

console.log('Con async await')

async function main() {
  const personAtSuperMarket = await gotToSuperMarket(cinMakePurchases) // regresa una promesa
    console.log(`${personAtSuperMarket.name} ya llego al supermercado`)
    console.log(personAtSuperMarket)

    const personWithHisThings = await payingThings(personAtSuperMarket)
    console.log(`${personWithHisThings.name} Ya pago su despensa`)
    console.log(personWithHisThings)

    const personAtHome = await goToHome(personWithHisThings)
    console.log(`${personAtHome.name} ya esta en casa`)
    console.log(personAtHome)
}

main()
    .then(() => {
        console.log('Todo cool 🤓')
    })
    .catch((error) => {
        console.error('Error: ', error)
    })

// top level await - proximamente
// const personAtSuperMarket = await gotToSuperMarket(cinMakePurchases) // regresa una promesa
// console.log(`${personAtSuperMarket.name} ya llego al supermercado`)
// console.log(personAtSuperMarket)

/*
Prácticas: 
    1. Realizar el proceso de inscripcion a Kodemia con promesas
        - Encadenamiento de promesas
        - async / await
    2. Práctica del CRUD de Koders con file System con promesas:
        A partir de archivo koders.json
        Realizar lo siguiente:
            1º Crear un función que permita leer el archivo e imprimir en consola el arreglo de Koders
            2º Crear una función que permita agregar un Koder y guardar el archivo con el cambio realizado
            3º Crear una funcion que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
            4º Crear una función que permita editar a un Koder por su id y guardar el archivo con el cambio realizado
            5º Crear una función que permita obtener a los koders que sean mayores a 25 años
            JSON.parse() -> convierte de cadena a un objeto js
            JSON.stringify() -> convertir de objeto a string
            async / await
*/