# API de Gerenciamento de Jogadores de Futebol

Esta é uma API para gerenciar informações sobre jogadores de futebol, incluindo seus clubes, estatísticas e outras informações relevantes. A API foi desenvolvida utilizando o framework Express.js em TypeScript.

## Instalação e Uso

Para utilizar esta API, é necessário ter o Node.js instalado no sistema. Após clonar este repositório, execute os seguintes comandos para instalar as dependências e iniciar o servidor:

<pre><code>npm install</code></pre>
<pre><code>npm run start:dev</code></pre>
<br>

Você também pode compilar os arquivos typescript para javaScript usando o comando:

<pre><code>npm run start:dist</code></pre>


## Rotas Disponíveis

### Jogadores

- <strong>GET</strong> → /api/players → Retorna informações sobre todos os jogadores.
- <strong>GET</strong> → /api/players/:id → Retorna informações sobre um jogador específico com base em seu ID.
- <strong>POST</strong> → /api/players → Adiciona um novo jogador.
- <strong>DELETE</strong> → /api/players/:id → Remove um jogador existente com base em seu ID.
- <strong>PATCH</strong> → /api/players/:id → Atualiza as estatísticas de um jogador existente com base em seu ID.

### Clubes

- <strong>GET</strong> → /api/clubs → Retorna uma lista de todos os clubes presentes na base de dados.

## Estrutura do Projeto

O projeto segue a seguinte estrutura:

- app: Contém a configuração e inicialização do aplicativo Express.js.
- controllers: Contém os controladores que lidam com as requisições HTTP e as respostas da API.
- models: Contém os modelos de dados da aplicação, incluindo interfaces TypeScript para representar jogadores, estatísticas, etc.
- repositories: Contém os repositórios que acessam e manipulam os dados da base de dados.
- routes: Contém as definições das rotas da API.
- services: Contém os serviços que implementam lógica de negócios ou interações com outras camadas.
- utils: Contém utilitários e funções auxiliares.

## Pré-requisitos

- Node.js instalado no sistema.

## Licença

Este projeto está licenciado sob a Licença MIT.
