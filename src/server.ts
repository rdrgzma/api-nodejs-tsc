import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
//import mainRoutes from './routes';

dotenv.config();
const server = express();


server.use((req,res)=>{
    res.render('pages/404');
});


server.listen(process.env.PORT);