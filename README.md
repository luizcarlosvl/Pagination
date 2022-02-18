# Pagination-API

Descrição:

A API recebe dois parâmetros na query string: o número de páginas e a página atual.
O retorno é um array com a página principal em markdown (dois asteriscos) e as quatro páginas mais próximas da atual.

Instruções para instalar o API:

- clone esse repositório **git clone git@github.com:luizcarlosvl/Pagination.git**
- instale as dependências **npm install**
- Conecte a API **npm start**

Como utilizar a API:

- Acesse o link o navegador: http://localhost:3000/paginacao?pagina=10&quantidade=10

- Altere os valores de 'pagina' e 'quantidade'.

- Ex.: Os valores de pagina=5 e quantidade=10 devem retornar o seguinte resultado:
['...', '3', '4', '**5**', '6', '7', '...']

# 
<h4> Tecnologias utilizadas <h4>

- NodeJS
- ExpressJS
