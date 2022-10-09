![image](https://user-images.githubusercontent.com/84422472/194757567-d50d242d-a7ca-4284-9d73-1df19a083957.png)


# Teste Técnico Shopper

**HOME**
![image](https://user-images.githubusercontent.com/84422472/194757584-9f247c3d-b746-454f-9138-8a9ed3c2fea0.png)

**CART**
![image](https://user-images.githubusercontent.com/84422472/194757607-7e6ef51f-0081-4e9f-8bcd-d209b6785856.png)
![image](https://user-images.githubusercontent.com/84422472/194757628-ca410dd8-ba96-4425-8c08-04f1aa6eda9a.png)

Projeto disponibilizado pela empresa Shopper para vaga de desenvolvedor(a) Full Stack Jr.

[DOCUMENTAÇÃO](https://documenter.getpostman.com/view/19889845/2s83zfQkVz)

[SURGE](http://quiet-store.surge.sh/)

## Linguagens e ferramentas utilizadas:

- JAVASCRIPT
- TYPESCRIPT
- NODE.JS
- MYSQL
- REACT.JS
- MATERIAL-UI

**O que foi pedido no case:**

- O sistema deve ter um formulário de cadastro de pedidos
- O usuário deve entrar com Nome do Cliente, Data de Entrega e uma lista de compras
- A lista de compras é composta por um ou mais produtos e a quantidade solicitada para cada um deles.
- O usuário pode alterar a quantidade de itens já cadastrados ou excluir um item que ele não queira mais.
- A cada alteração na lista de compras o sistema deve calcular o valor total do pedido.
- Todas essas informações devem ser salvas em um banco de dados que você vai modelar.
- Cada pedido salvo deve debitar a quantidade do produto correspondente de seu estoque.
- O sistema deve alertar o usuário caso a quantidade solicitada não esteja disponível no estoque.
- O sistema também deve ter uma função para mostrar o estoque atual exibindo: Nome do produto e a quantidade em estoque.

**O que foi feito do case:** 

- O sistema deve ter um formulário de cadastro de pedidos
- O usuário deve entrar com Nome do Cliente, Data de Entrega e uma lista de compras
- A lista de compras é composta por um ou mais produtos e a quantidade solicitada para cada um deles.
- O usuário pode alterar a quantidade de itens já cadastrados ou excluir um item que ele não queira mais.
- A cada alteração na lista de compras o sistema deve calcular o valor total do pedido.
- Todas essas informações devem ser salvas em um banco de dados que você vai modelar.
- O sistema deve alertar o usuário caso a quantidade solicitada não esteja disponível no estoque.


# BACKEND

**Tabelas** 

```sql

CREATE TABLE IF NOT EXISTS shopper_products(
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    qty_stock INT NOT NULL
);

CREATE TABLE IF NOT EXISTS shopper_pucharse (
    id VARCHAR(255) PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_id VARCHAR(255),
    price FLOAT,
    amount INT,
    total INT
);

INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("19","ENERGÉTICO RED BULL ENERGY DRINK 250ML",7.29,909);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("20","ENERGÉTICO RED BULL ENERGY DRINK 355ML",10.79,159);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("22","ENERGÉTICO RED BULL ENERGY DRINK SEM AÇÚCAR 250ML",7.49,659);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("23","ÁGUA MINERAL BONAFONT SEM GÁS 1 5L", 2.39, 909);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("24","FILME DE PVC WYDA 28CMX15M",3.99,160);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("25", "FILME DE PVC PRATSY 15M",	4.39,	410);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("26","ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7 5M",5.79, 660);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("27",	"ÁGUA MINERAL SEM GÁS MINALBA 1 5L",2.29, 910);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("28",	"GUARDANAPO GRAND HOTEL SCOTT 24X24CM C/ 50UN",	4.39,	160);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("29",	"GUARDANAPO DIA A DIA SCOTT 24X22CM C/ 50UN",	2.59,	411);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("33",	"GUARDANAPO FOLHA DUPLA SNOB 23	5X23 5CM C/50UN" , 4.25, 411);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("34",	"GUARDANAPO FOLHA SIMPLES SNOB 24X22CM C/ 50UN",	2.19,	661);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("35",	"PAPEL TOALHA SNOB C/ 2UN",	5.39,	912);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("36",	"TOALHA DE PAPEL SCOTT DURAMAX C/ 1UN",	11.29,	162);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("40",	"PRATO DESCARTÁVEL COPOBRAS 18CM",	1.99,	163);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("41",	"PRATO DESCARTÁVEL COPOBRAS 15CM",	2.09,	413);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("43",	"PRATO DESCARTÁVEL COPOBRAS 21CM",	3.79,	913);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("45",	"COLHER DESCARTÁVEL MASTER PRAFESTA BRANCA C/ 50UN",	5.99,	413);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("47",	"GARFO DESCARTÁVEL MASTER PRAFESTA CRYSTAL C/ 50UN",	7.49,	914);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("48",	"FACA DESCARTÁVEL MASTER PRAFESTA CRYSTAL C/ 50UN",	8.99,	164);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("51",	"SACO PARA LIXO DOVER ROLL SUPER FORTE AZUL 50L C/ 30UN",	42.9,	915);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("53",	"PANO PARA LIMPEZA PERFEX C/ 5UN",	6.99,	415);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("54",	"PANO PARA LIMPEZA ALKLIN C/ 5UN",	4.79,	665);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("55",	"VELA SANTA CRUZ BRANCA C/8 25G", 5.89,	915);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("57",	"VELA SANTA CRUZ C/8 30G",	6.89,	416);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("58",	"BEBIDA DE SOJA SOYOS SÚFRESH LARANJA E CENOURA 1L",	4.99,	666);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("59",	"BEBIDA A BASE DE SOJA ADES LARANJA 1L",	5.39,	916);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("60",	"BEBIDA A BASE DE SOJA ADES MAÇÃ 1L",	5.59,	166);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("61",	"BEBIDA À BASE DE SOJA ADES MAÇÃ ZERO 1L",	7.39,	416);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("62",	"BEBIDA À BASE DE SOJA ADES LARANJA ZERO 1L",	7.39,	667);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("65",	"CREME DE TRATAMENTO ELSEVE ULTRA LISO 300G",	16.99,	417);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("66",	"CREME DE TRATAMENTO ELSEVE OLÉO EXTRAORDINÁRIO 300G",	18.99,	667);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("74",	"DESODORANTE ROLL ON DOVE ORIGINAL 50ML",	10.49,	669);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("75",   "DESODORANTE ROLL ON DOVE SENSITIVE SEM PERFUME 50ML",	10.74,	919);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("76",	"DESODORANTE AEROSOL DOVE BEAUTY 150ML",	14.99, 169);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("77",	"DESODORANTE AEROSOL DOVE PURE 100G",	13.19,	419);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("78",    "REFRIGERANTE ANTARCTICA GUARANÁ 2L",	6.79,	670);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("79",	"ÁGUA MINERAL SEM GÁS CRYSTAL GARRAFÃO 5L",	7.99,	920);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("82",	"REFRIGERANTE H2OH! DE LIMÃO 500ML",	3.09,	670);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("84",	"DESODORANTE AEROSOL NIVEA SENSITIVE SEM PERFUME 150ML",	11.99,	171);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("87",	"REFRIGERANTE H2OH! LIMÃO 1 5L",	6.99, 921);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("88",	"DESODORANTE AEROSOL NIVEA BLACK&WHITE INVISIBLE MASCULINO 150ML",	11.99,	171);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("92",	"ÁGUA MINERAL PRATA SEM GÁS 1 5L",	3.09, 172);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("94",	"NÉCTAR MAGUARY DE MARACUJÁ 1L",	4.49,	672);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("95",	"REFRIGERANTE ANTARCTICA GUARANÁ ZERO 2L",	5.79,	923);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("96",	"ÁGUA MINERAL SEM GÁS CRYSTAL PET 1 5L",2.59, 173);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("97",   "AGUA MINERAL BONAFONT SEM GÁS 500ML",	1.75,	423);
INSERT INTO shopper_products (id,name, price, qty_stock) VALUES("98",   "DESODORANTE AEROSOL REXONA ANTIBACTERIANO + INVISIBLE PROTECTION FEMININO 150ML",	11.99,	673);

```

### Instruções para usar o case localmente:

No terminal, executar os segintes comandos:

**git clone https://github.com/Bentojessica/shooper-case.git**

Para rodar o servidor (back end)
Crie um arquivo .env e adicione as variáveis de ambiente assim:

DB_HOST = 

DB_USER = 

DB_PASSWORD = 

DB_SCHEMA =

###No backend roda o comando:

**npm install**
 
 e
 
 **npm run dev**

##Na documentação está o deploy do backend, você pode usar ela para acessar os endpoint também!

###No frontend roda o comando:

**npm install**

e

**npm run start**
