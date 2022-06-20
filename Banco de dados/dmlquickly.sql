USE Quickly;

INSERT INTO TB_ADMIN (nm_login,ds_senha)
     VALUES ('admin', '1234');
     

select id_admin		id,
       nm_login		nome
  from TB_ADMIN
 where nm_login			= 'admin'
   and ds_senha			= '1234';

-- Adicionar comanda   
INSERT INTO TB_COMANDA (id_admin,nm_cliente, ds_endereco, ds_contato, ds_pedido, ds_total)
     VALUES (1,'fred', 'Veleiros', '932077417', 'Calabresa', 50.00, 'Em Aberto');

-- Alterar comanda
UPDATE TB_COMANDA
   SET nm_cliente      = 'Matheus',
       ds_endereco     = 'Ali',
       ds_contato  	   = '99999999',
       ds_pedido 	   = 'Frango',
       ds_total 	   = 60.00,
       ds_situacao	   = 'Em Aberto'
 WHERE id_comanda = 1;
 
 -- remover comanda
DELETE FROM TB_COMANDA 
      WHERE id_comanda = 1;
      
-- consultar todas comanda     
SELECT id_comanda		id,
	   nm_cliente	    nome,
       ds_endereco		endereco,
	   ds_contato		contato,
       ds_pedido		pedido,
       ds_total	 		total,
       ds_situacao		situacao
  FROM tb_comanda;

-- consulta comanda por nome do cliente
SELECT id_comanda		id,
	   nm_cliente		nome,
       ds_endereco		endereco,
       ds_contato		contato,
       ds_pedido		pedido,
       ds_total			total,
       ds_situacao		situacao
  FROM tb_comanda
 WHERE nm_cliente		like '%a%';


-- consultar comanda por id
SELECT id_comanda		id,
	   nm_cliente	    nome,
       ds_endereco		endereco,
	   ds_contato		contato,
       ds_pedido		pedido,
       ds_total	 	total,
       ds_situacao		situacao
  FROM TB_COMANDA
 WHERE id_comanda			= 2;
 

     