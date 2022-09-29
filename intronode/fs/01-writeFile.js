const fs = require('fs')

fs.writeFile('koder.txt', 'Hola koder desde fs de node', (error)=>{
    if(error){
        console.log('Ocurrio un error', error);
        return
    }
    console.log('Se ha creado el archivo!! :D');
})