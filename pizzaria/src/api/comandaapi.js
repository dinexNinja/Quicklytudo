import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function novaComanda(nome, end, cont, pedido, total){
    const resposta  = await api.post('/comanda', {
        nome: nome,
        endereco: end,
        contato: cont,
        pedido: pedido,
        total: total
    })
    return resposta.data;
}
export async function listarComanda(){
    const resposta = await api.get('/comanda');
    return resposta.data
}
export async function listarConcluidas(){
    const resposta = await api.get('/comanda/concluidas');
    return resposta.data
}
export async function listarNome(nome) {    
    const resposta = await api.get(`/comanda/busca?nome=${nome}`);
    return resposta.data
}
export async function Deletar(id){
    const resposta = await api.delete(`/comanda/${id}`);
    return resposta.status
}
export async function AlterarComanda(id, nome, end, cont, pedido, total, sit){
    const resposta = await api.put(`/comanda/${id}`, {
        nome: nome,
        endereco: end,
        contato: cont,
        pedido: pedido,
        total: total
    });
    return resposta.data
}
export async function Concluir(id){
    const resposta = await api.put(`/comanda/status/${id}`);
    return resposta.data
}
