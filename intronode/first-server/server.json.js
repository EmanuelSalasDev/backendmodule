/*
Crear su servidor
GET / koders -> {"message": "Aqui se obtendran los koders "}
*/

require('http').createServer(function(req, res){
    let koders = {
        'personas': [
            {
                'id': 1001,
                'nombre': 'Emanuel Salas',
                'email': 'emanuelsalas.dev@gmail.co'
            },
            {
                'id': 1002,
                'nombre': 'Panfilo',
                'email': 'panfilo.dev@gmail.co'
            },
            {
                'id': 1002,
                'nombre': 'Panfilo',
                'email': 'panfilo.dev@gmail.co'
            },
        ]
    }
    res.writeHead(200, {'content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    res.end(JSON.stringify(koders))
}).listen(8080);

console.log('El servidor se esta ejecutando en el puerto 8080');