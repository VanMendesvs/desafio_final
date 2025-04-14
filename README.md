📚 Desafio Fnal: API Livros - Vai Na Web

Este projeto é um desafio do módulo avançado de FullStacj do curso Vai Na Web. 
O objetivo é criar uma API em Flask para cadastrar e listar livros, aplicando boas práticas no desenvolvimento de APIs e banco de dados.

🚀 Funcionalidades
----------------------------------------------------------------------------------
📌 Página inicial: Acessar a rota / para verificar se a API está funcionando.

📌 Cadastrar um livro: Enviar uma requisição POST para /doar para adicionar um novo livro ao banco de dados.

📌 Listar todos os livros: Fazer uma requisição GET para /livros para obter todos os livros cadastrados.

📌 Deletar um livro: Enviar uma requisição DELETE para /livros/<id> para remover um livro existente.

⚙️ Tecnologias Utilizadas
---------------------------------------------------------------------------------
BACK-END:
Flask - Framework para construção da API.
SQLite - Banco de dados para armazenar os livros.
JSON - Formato de resposta da API.

FRONT-END:
React
Axios
HTML5
JavaScript
CSS

Deploy:
Database Clien
Postman
Render

📤 Endpoints da API
-----------------------------------------------------------------------------------------------

Método	Rota	Descrição
GET	/	Página inicial da API
GET	/livros	Listar todos os livros
POST	/doar	Cadastrar um novo livro
DELETE	/livros/<int:livro_id>	Deletar um livro pelo ID

📌 Exemplo de Requisição POST /doar
-------------------------------------------------------------------
```json
{
  "titulo": "O Pequeno Príncipe",
  "categoria": "Ficção",
  "autor": "Antoine de Saint-Exupéry",
  "imagem_url": "https://exemplo.com/pequeno-principe.jpg"
}

📌 Exemplo de Resposta GET /livros
-----------------------------------------------------------------------
```json
[
  {
    "id": 1,
    "titulo": "O Pequeno Príncipe",
    "categoria": "Ficção",
    "autor": "Antoine de Saint-Exupéry",
    "imagem_url": "https://exemplo.com/pequeno-principe.jpg"
  }
]
```
📌 Observações
------------------------------------------------------------------------------------
Importante

Este projeto é voltado para fins educacionais e demonstração.

