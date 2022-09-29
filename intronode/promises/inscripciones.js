const inscriptionKodemiaSin = {
    name: 'Sina',
    isInterviewed: false, // true
    hasOffer: false,
    isInscript: false,
    canTakeClass: false
}

function takeAInterview(koderToInterview) {
    return new Promise((resolve, reject) => {
        console.log(`${koderToInterview.name} llendo a la entrevista`);
    setTimeout(() => {
        koderToInterview.isInterviewed = true
        if (!koderToInterview.isInterviewed) {
            reject (`${koderToInterview.name} No pudo asistir a la entrevista`)
        }
        resolve(koderToInterview)
    }, 3000)
    })
}


function doOffer(koderToOffer){
    return new Promise((resolve, reject) => {
        console.log(`${koderToOffer.name} Esta haciendo la Oferta`);
    setTimeout(() => {
        koderToOffer.hasOffer = true
        if (!koderToOffer.hasOffer) {
            reject (`${koderToOffer.name} No se pudo realizar una oferta`)
        }
        resolve(koderToOffer)
    }, 3000)
})
}
            


function isInscript(koderIsInscript){
    return new Promise((resolve, reject) => {
        console.log(`${koderIsInscript.name} Se esta Inscribiendo`);
    setTimeout(() => {
        koderIsInscript.isInscript = true
        if (!koderIsInscript.isInscript) {
            reject (`${koderIsInscript.name} No se pudo inscribir`)
        }
        resolve(koderIsInscript)
    }, 3000)
})
}



function canTakeClass(kodercanTakeClass){
    return new Promise((resolve, reject) => {
        console.log(`${kodercanTakeClass.name} Puede tomar la clase`);
    setTimeout(() => {
        kodercanTakeClass.canTakeClass = true
        if (!kodercanTakeClass.isInscript) {
            reject (`${kodercanTakeClass.name} No pudo tomar la clase`)
        }
        resolve(kodercanTakeClass)
    }, 3000)
})
}



/*
takeAInterview (inscriptionKodemiaSin) 
    .then((personTakeAInterview) =>{
        console.log(`${personTakeAInterview.name} ya esta tomando la entrevista`);
        console.log(personTakeAInterview);
        return doOffer (personTakeAInterview)
    })

    .then ((personMakingOffer) => {
        console.log(`${personMakingOffer.name} Se esta haciendo una oferta`);
        console.log(personMakingOffer);
        return isInscript (personMakingOffer)
    })

    .then ((personIsInscript) => {
        console.log(`${personIsInscript.name} Se esta inscribiendo`);
        console.log(personIsInscript);
        return canTakeClass (personIsInscript)
    })

    .then ((personCanTakeClass) => {
        console.log(`${personCanTakeClass.name} Esta tomando la clase`);
        console.log(personCanTakeClass);
    })
    .catch((error) =>{
        console.error('Error: ', error)
    }) */






    async function main (){
        const personTakeAAinterview = await takeAInterview(inscriptionKodemiaSin)
        console.log(`${personTakeAAinterview.name}  Esta tomando al entrevistaa`);
        console.log(personTakeAAinterview);

        const personMakeAOffer =  await doOffer (personTakeAAinterview)
        console.log(`${personMakeAOffer.name} Ya se realizo una oferta completa`);
        console.log(personMakeAOffer);

        const personRealizeInscript =  await isInscript(personMakeAOffer)
        console.log(`${personRealizeInscript.name}  ya estas inscrito carnaall`);
        console.log(personRealizeInscript);

        const personCanTakeClass = await canTakeClass(personRealizeInscript)
        console.log(`${personCanTakeClass.name} ya puedes entrar a clases carnalito`);
        console.log(personCanTakeClass);
    }

    main()
        .then(() => {
            console.log('Carnal eres un Crack');
        })
        .catch((error) => {
            console.error('Error: ', error)
        })



        ////Esto es una prueba