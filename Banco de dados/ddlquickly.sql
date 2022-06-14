CREATE DATABASE Quickly;

SHOW DATABASES;
SHOW TABLES;
DESC TB_COMANDA;
DROP TABLE TB_comanda;
USE Quickly;
select * from tb_comanda;

CREATE TABLE TB_ADMIN (
	id_admin   int primary key auto_increment not null unique,
    nm_login     varchar(30) not null,
	ds_senha     varchar(15) not null
);


CREATE TABLE TB_COMANDA(
	id_comanda	  int primary key not null unique auto_increment ,
    id_admin      int,
    foreign key   (id_admin) references TB_ADMIN (id_admin),
    nm_cliente	  varchar(100),
    ds_endereco	  varchar(200),
    ds_contato	  varchar(100),
    ds_pedido	  varchar(300),
    ds_total 	  decimal(9,2),
    ds_situacao	  varchar(50)
    );

    