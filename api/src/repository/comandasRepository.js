import {con} from './connection.js'


export async function Adicionar (comanda){
    const comando =
     `
     INSERT INTO TB_COMANDA (id_admin, nm_cliente, ds_endereco, ds_contato, ds_pedido, ds_total, ds_situacao)
     VALUES (?, ?, ?, ? ,?, ?, 'EM ABERTO')
    `

    const [resposta] = await con.query(comando, [comanda.id, comanda.nome, comanda.endereco, comanda.contato, comanda.pedido, comanda.total, comanda.situacao]);
    
    comanda.id = resposta.insertId;

    return comanda;
}

export async function Alterar (id, comanda) {
    const comando = 
    `
    UPDATE TB_COMANDA
   SET nm_cliente      = ?,
       ds_endereco     = ?,
       ds_contato  	   = ?,
       ds_pedido 	   = ?,
       ds_total 	   = ?
 WHERE id_comanda       = ?
    `
    const [resposta] = await con.query (comando, [ comanda.nome, comanda.endereco, comanda.contato, comanda.pedido, comanda.total, id])
    return resposta.affectedRows
}

export async function Remover (id){
    const comando = 
    `
    DELETE FROM TB_COMANDA 
      WHERE id_comanda = ?
    `
    const [resposta] = await con.query (comando, [id]);
    return resposta.affectedRows
}

export async function Listar(){
    const comando = 
    ` 
    SELECT id_comanda		id,
	   nm_cliente	    nome,
       ds_endereco		endereco,
	   ds_contato		contato,
       ds_pedido		pedido,
       ds_total	 	    total,
       ds_situacao      situacao
  FROM tb_comanda
  WHERE ds_situacao     = 'EM ABERTO'
    `
    
    const [resposta] = await con.query(comando)
    return resposta
}

export async function ListarCon(){
    const comando = 
    ` 
    SELECT id_comanda		id,
	   nm_cliente	    nome,
       ds_endereco		endereco,
	   ds_contato		contato,
       ds_pedido		pedido,
       ds_total	 	    total,
       ds_situacao      situacao
  FROM tb_comanda
  WHERE ds_situacao     = 'CONCLUIDO'
    `
    
    const [resposta] = await con.query(comando)
    return resposta
}

export async function ListarId(id){
    const comando= 
    `
    SELECT id_comanda		id,
	   nm_cliente	    nome,
       ds_endereco		endereco,
	   ds_contato		contato,
       ds_pedido		pedido,
       ds_total	 		total,
       ds_situacao      situacao
  FROM TB_COMANDA
 WHERE id_comanda			= ?
    `
    const [resposta] = await con.query(comando, [id])
    return resposta[0]
}

export async function ListarNome(nome){
    const comando = 
    `
    SELECT id_comanda		id,
	   nm_cliente		nome,
       ds_endereco		endereco,
       ds_contato		contato,
       ds_pedido		pedido,
       ds_total			total,
       ds_situacao      situacao
  FROM tb_comanda
 WHERE nm_cliente		like ? and
        ds_situacao     = "EM ABERTO"
    `
    const [resposta] = await con.query(comando, [`%${nome}%`])
    return resposta
}

export async function Situacao( id){
    const comando =
    `
    UPDATE TB_COMANDA
   SET ds_situacao     = 'CONCLUIDO'
 WHERE id_comanda       = ?
    `
    const [resposta] = await con.query(comando, [ id])
    return resposta
}