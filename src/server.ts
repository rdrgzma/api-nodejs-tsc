import express, { json } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const server = express();
server.use(express.json());

// Listar
server.get("/",(req,res)=>{
    return res.json({"mensagem": "Funcionando"}); 
});

//Criar
server.post("/",(req,res)=>{
    let{nome , email} = req.body;
    return res.json({nome,email});
});

//Atualizar
server.put("/:id", (req,res)=>{
    const {id} = req.params;
    const {nome,email} = req.body;
    return res.json({
        id,
        nome,
        email
    });
})

//Apagar
server.delete("/:id", (req,res)=>{
    const {id} = req.params;
    return res.json({
        id
    })
});


server.listen(process.env.PORT, ()=>{console.log(`Servidor rodando na porta: ${process.env.PORT}`)});