import { Router } from "express";
import { Login } from "../repository/usuarioRepository.js";
const server = Router()

server.post('/usuario/login' , async (req,resp) => {
    try{
        const {email, senha} = req.body;
        const resposta = await Login(email,senha)
        if(!resposta){
            resp.status(401).send(
               { 
                 erro:   'Credencias Inválidas'
               }
            )
        }
        resp.send(resposta)
    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;