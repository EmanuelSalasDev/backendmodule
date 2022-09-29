// Importamos el modulo http de node
const http = require ('http')

//Recibe un requestListener
const server = http.createServer((request, response) =>{
    const url = request.url
    console.log('url', url);
    const method =request.method
    console.log('method', method);
    if (method === 'GET' && url ==='/koders'){
        response.write ('Aqui estaran todos los koders')
        response.end();
    }else if (method === 'POST' && url ==='/koders'){
        response.write ('Aqui peudes crear un Koder')
        response.end()
    }else {
        response.write('No conozco esta solicitud :')
        response.end();
        
    }

    response.write('Hola desde mi servidor en node :D')
    response.end() //Cerramos la respuesta
})

/* 
8080 -> ambiente de desarrollo
443 -> 443
ssh -> 22
*/


server.listen(8080, ()=>{
    console.log('Server Listening on Port 8080');
})


/*
    Reaccionar a las siguientes rutas:
    Get / Koders -> aqui estaran todos los koder
    Post / Koders -> aqui Puedes Crear un Koder
    x/ x -> No conozco esta solicitud 

*/