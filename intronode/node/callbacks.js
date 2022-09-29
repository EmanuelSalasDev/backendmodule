/* un callback es la declaracion de una funcion que pasa como parametro a otra funcion para ser ejecutada posteriormente */


//Definicion de la funcion
function irAlSuperMercado(callback){
    console.log('Llendo al supermarcado');
    console.log('Llegue al supermercado');
    const mensaje = callback()
    console.log(mensaje);

};

//Declaracion de la funcion
function avisar() {
    return 'Hola, ya estoy en el supermercado'
}
irAlSuperMercado(avisar)//esta corecta
//irAlSuperMercado(avisar())//nos retorna un string no esta correcto


//firma -> la forma en que una funcion recibe sus parametros
/*
function cb(error, data){
    if(error){

    }
}
*/









//Declarando o definicion de la funcion
                   //parametros
function holaKoders(name){
    return 'Hola' + name
}


//Ejecutando la funcion
holaKoders('Annie')


//

function saludar (despedirme){
    console.log('rafa esta saludando');
    despedirme();
}


//firma de un metodo es la forma en que recibe sus parametros

saludar(() =>{
    console.log('Rafa se esta despidiendo');
})

//callback -> funciones anonimas
