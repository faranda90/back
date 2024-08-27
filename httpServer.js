import http from 'http';

const server = http.createServer((request,response) =>{
    response.end("Hola Backend");
});


server.listen(8080,()=> console.log("Listo el servidor en el puerto 8080"))
