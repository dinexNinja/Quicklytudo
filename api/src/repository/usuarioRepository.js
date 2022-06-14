import {con} from './connection.js'

export async function Login (email, senha){
    const comando = 
    `
    select  id_admin		id,
            nm_login		nome
    from    TB_ADMIN
    where   nm_login		= ?
    and     ds_senha		= ?
    `
    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}