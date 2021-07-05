
## Backend

Esse repositório utiliza-se um webservice localizado em  `https://github.com/gabriellorandi/trojahn-frontend-produto`. 

### Rotas

O Backend possui as seguintes rotas:

**/api/produtos** (GET, POST, PUT, DELETE)
- GET: Retorna os produtos cadastrados
- POST: Adiciona um novo produto. É necessário repassar as informações `titulo`, `preco` e `descricao` no corpo da requisição.
- PUT: Atualiza um produto já cadastrado. É necessário repassar as informações `titulo`, `preco` e `descricao` no corpo da requisição. É necessário informar o **_id** do produto cadastro diretamente na URL de requisição: (Ex: */api/produtos/607048aa34f27b00cc12a2d4*).
- DELETE: Remove um produto cadastrado. É necessário informar o **_id** do produto cadastro diretamente na URL de requisição: (Ex: */api/produtos/607048aa34f27b00cc12a2d4*).

