import express from 'express';
import dotenv from 'dotenv';
//import path from 'path';
//import mainRoutes from './routes';

dotenv.config();
const server = express();


server.get("/",(req,res)=>{
    res.send("Servidor funcionando"); 
});


server.listen(process.env.PORT, ()=>{console.log(`Servidor rodando na porta: ${process.env.PORT}`)});