import express, { response } from 'express';


const app = express ();

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

app.get('/',(request,response)=>{
    response.send("Hola Express");
})

app.get('/users',(request, response)=>{
    response.end("Aqui te devolvere un usuario")
})

