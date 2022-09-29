/* Acciones:
    1-.ir al super -5000ms
    2-. pagar la despensa -3000ms
    3-. llegar a casa -4000ms
    cada vez que haga cada acción se ejecutará un callback
*/

function goToSuperMarket(callback){
    console.log('Llendo al super...')
    setTimeout(() => {
        //ejecuta el callback
        callback(null, 'hola, ya llegue al super')
    }, 5000)
}

function payThings(callback){
    console.log('Haciendo la fila para pagar...')
    setTimeout(()=>{
        callback(null, 'Hola, ya pagué la despensa ')
    }, 3000)
}

function arriveHome(callback){
    console.log('Llendo a casa...')
    setTimeout(()=>{
        callback(null, 'Hola, ya estoy en casa')
    },2000)
}


//callback hell! 
goToSuperMarket((error, msg) =>{
    if(error){ //como null es false -> si va a ejecutarse el else
        console.log('Ha ocurrido un error', err);
    }
            console.log(msg);//ya llegó al super

    payThings((error, msg)=>{
        if(error){ //como null es false -> si va a ejecutarse el else
            console.log('Ha ocurrido un error', err);
        }
            console.log(msg);
        
    arriveHome((error,msg)=>{
        if(error){ //como null es false -> si va a ejecutarse el else
            console.log('Ha ocurrido un error', err);
        }
            console.log(msg);
        
        });
    });
    
});

/* 
Proceso de inscripción a kodemia 
1-. recibir info, entrevista
2-. enviar oferta
3-. inscripción
4-. prebootcamp
Plasmar en funciones y callbacks dicho proceso
Todos los datos cambiarán a true 
*/

const inscriptionKodemiaCin = {
    name: 'Cin Ruiz',
    isInterviewed: false, // true
    hasOffer: false,
    isInscript: false,
    canTakeClass: false
}

function takeAInterview(koderToInterview, callback) {
    console.log(`Entrevistando a ${koderToInterview.name}`)
    setTimeout(() => {
        let error = null

        koderToInterview.isInterviewed = true

        if(!koderToInterview.isInterviewed) {
            error = `No se logro entrevistar a ${koderToInterview.name}`
        }

        callback(error, koderToInterview)
    }, 3000)
}

function doOffer(koderToOffer, callback) {
    console.log(`Viendo si le hacemos una oferta a ${koderToOffer.name}`)
    setTimeout(() => {
        let error = null
        koderToOffer.hasOffer = true

        // Operador ternario
        // error = !koderToOffer.hasOffer
        //             ? `${koderToOffer.name} no tiene una oferta` // si cumple 
        //             : null // si NO cumple

        // Sintaxis del operador ternario
        // (condicion)
        //   ? -> si cumple la condicion
        //   : -> Si NO cumple la condicion
        
        // Operador and and
        error = !koderToOffer.hasOffer && `${koderToOffer.name} no tiene una oferta`
        callback(error, koderToOffer)
    }, 4000)
}


function isInscript(koderIsInscript, callback) {
    console.log(`se esta inscribiendo ${koderIsInscript.name}`)
    setTimeout(() => {
        let error = null

        koderIsInscript.isInscript = true

        if(!koderIsInscript.isInscript) {
            error = `No se logro inscribir ${koderToInterview.name}`
        }

        callback(error, koderIsInscript)
    }, 3000)
}


function canTakeClass(kodercanTakeClass, callback) {
    console.log(`Esta tomando la clase ${kodercanTakeClass.name}`)
    setTimeout(() => {
        let error = null

        kodercanTakeClass.canTakeClass = true

        if(!kodercanTakeClass.canTakeClass) {
            error = `No se logro tomar la clase ${koderToInterview.name}`
        }

        callback(error, kodercanTakeClass)
    }, 3000)
}









takeAInterview(inscriptionKodemiaCin, (errorToInterview, koderInterviewed) => {
    if(errorToInterview) {
        console.log('Error entrevista: ', errorToInterview)
        return
    }

    console.log(`${koderInterviewed.name} ah sido entrevistada!! `)
    console.log(koderInterviewed)
    // Oferta
    doOffer(koderInterviewed, (errorDoOffer, koderWithOffer) => {
        if(errorDoOffer) {
            console.log('Error oferta: ', errorDoOffer)
            return 
        }
        console.log(`${koderWithOffer.name} Ya tiene una oferta!! `)
        console.log(koderWithOffer)
        //se esta inscribiendo
        isInscript(koderWithOffer, (errorKoderInscript, koderIsInscript)=>{
            if (errorKoderInscript) {
                console.log('Error al inscribirse', errorKoderInscript);
                return;
            }
            console.log(`${koderIsInscript.isInscript} ya tiene inscripcion!!`);
            console.log(koderIsInscript);
            //inscripcion
            canTakeClass(koderIsInscript, (errorKoderIsintScript, kodercanTakeClass)=>{
                if (errorKoderIsintScript) {
                    console.log('Error al tomar la clase', errorKoderIsintScript);
                    return;
                }
                console.log(`${kodercanTakeClass.canTakeClass} ya puede asistir a clase!!`);
                console.log(kodercanTakeClass);
                //clases

        })
        
    })
})
})