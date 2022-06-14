
import { Router } from 'express'
import  { Adicionar, Alterar, Remover, Listar, ListarId, ListarNome, Situacao, ListarCon } from '../repository/comandasRepository.js'

const server = Router()

server.post('/comanda' , async (req, resp) => {
    try{
        const novaComanda = req.body;
        if(!novaComanda.nome || novaComanda.nome == null){
            throw new Error('Nome inválido')
        }
        if(!novaComanda.endereco){
            throw new Error('Endereço inválido')
        }
        if(!novaComanda.contato){
            throw new Error('Contato inválido')
        }
        if(!novaComanda.pedido){
            throw new Error('Pedido inválido')
        }
        if(!novaComanda.total){
            throw new Error('Total inválido')
        }
       
       
        const comanda = await Adicionar(novaComanda);
        resp.send(comanda)
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/comanda/:id', async(req, resp) => {
    try{
        const {id} = req.params;
        const comanda = req.body;

        if(!comanda.nome){
            resp.status(401).send('nome invalido')
        }
        if(!comanda.endereco){
            resp.status(401).send('endereço invalido')
        }
        if(!comanda.contato){
            resp.status(401).send('contato invalido')
        }
        if(!comanda.pedido){
            resp.status(401).send('pedido invalido')
        }
        if(!comanda.total){
            resp.status(401).send('total invalido')
        }
        // if(!comanda.situacao){
        //     resp.status(401).send('situacao invalida')
        // }
        // if(comanda.situacao != "em aberto") {
        //     resp.status(401).send('situacao invalida')
        // }

        const resposta = await Alterar(id, comanda)
        if(resposta != 1){
            throw new Error('Nao foi pussivi')
        }
        else {
            resp.status(200).send()
        }

    } catch(err){
        resp.send({
            erro: err.message
        })
    }

} )

server.get('/comanda', async (req, resp) => {
    try{
    const resposta = await Listar();
    resp.send(resposta)   
    
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.get('/comanda/concluidas', async (req, resp) => {
    try{
    const resposta = await ListarCon();
    resp.send(resposta)   
    
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.delete('/comanda/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const resposta = await Remover(id)

        if(resposta != 1){
            throw new Error('deu nao chefe')
        }
        else{
        resp.status(204).send();
        }
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})
server.get('/comanda/busca' , async (req, resp) => {
    try{
    const {nome} = req.query;

    const resposta = await ListarNome(nome);
    if(!resposta){
        resp.status(401).send('nao encontramos comandas com esse nome')
    }
    else {
        resp.send(resposta)
    }
} catch(err){
    resp.send({
        erro: err.message 
    })
} 
})
server.get('/comanda/:id', async (req, resp) => {
    try{
        const id = Number(req.params.id);
        
        const resposta = await ListarId(id)
        if(!resposta){
            resp.status(404).send('comanda inexistente')
        }
        else {
            resp.send(resposta)
        }
    } catch(err){
        resp.send({
            erro: err.message
        })
    }
})
server.put('/comanda/status/:id', async (req, resp) => {
    try{
        const {id} = req.params;
        const comanda = Situacao(id)
        resp.status(200).send(comanda)
    } catch(err){

    }
})
 
export default server;
