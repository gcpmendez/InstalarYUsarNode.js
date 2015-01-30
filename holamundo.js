var http = require('http');
http.createServer(function(peticion, respuesta){
   respuesta.writeHead(200, 'text/plain');
   respuesta.end('Hola mundo!');
}).listen(3000, '127.0.0.1');
console.log('El servidor esta funcionando correctamente en http://localhost:3000/');
