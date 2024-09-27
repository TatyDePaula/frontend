# Meu Frontend - Comunidade para Estudantes de Programação

Este projeto é um frontend desenvolvido em React, utilizando Node.js e Bootstrap, com o objetivo de oferecer uma plataforma em formato de blog ou rede social voltada para estudantes de programação. Neste ambiente, os estudantes podem criar perfis de usuário, postar dúvidas ou compartilhar suas experiências de aprendizado, e mencionar o curso de programação que estão fazendo.

Este frontend se comunica com um microsserviço backend via métodos HTTP (GET, POST, PUT, DELETE) e com uma API externa (Via CEP) para preenchimento automático do endereço do usuário.

## Funcionalidades

- **Perfil de Usuário**: Criação e edição de perfis de usuário, incluindo informações pessoais e endereço.
- **Posts**: Criação, edição e visualização de posts que podem ser dúvidas ou relatos de aprendizado.
- **Preenchimento Automático de Endereço**: Ao informar o CEP, o endereço é preenchido automaticamente por meio da API Via CEP.
- **Integração com Backend**: Comunicação com o backend para gerenciar usuários e posts, utilizando um banco de dados SQLite.

## Tecnologias Utilizadas

- **Frontend**: React.js, Bootstrap, Node.js
- **Backend**: SQLite, comunicação via REST API
- **API Externa**: Via CEP (para preenchimento automático do endereço)
- **Containerização**: Docker

## Estrutura do Projeto

meu-frontend/
│
├── node_modules/             # Dependências instaladas
├── public/                   # Arquivos públicos, como o index.html
├── src/
│   ├── components/           # Componentes React
│   ├── pages/                # Páginas da aplicação
│   ├── services/             # Serviços para comunicação com o backend e API externa
│   ├── App.js                # Arquivo principal da aplicação React
│   └── index.js              # Ponto de entrada do React
│
├── Dockerfile                 # Arquivo Docker para containerizar a aplicação
├── package.json               # Dependências e scripts do projeto
└── README.md                  # Documentação do projeto


## Requisitos

- **Node.js** (versão 14+)
- **Docker** (para construção do container)
- **NPM** ou **Yarn** para gerenciamento de dependências

## Instruções de Uso

Clonar este repositório:
https://github.com/TatyDePaula/frontend.git

### 1. Instalação das Dependências

Para instalar as dependências do projeto, siga os seguintes passos:

- Entre na pasta do projeto:

  ```sh
  cd C:\Users\tatyd\Desktop\frontend\meu-frontend

### Processo de instalação da imagem Docker
Para instalar as dependências, você pode escolher uma das seguintes abordagens:

1. Excluir package-lock.json antes de instalar: rm package-lock.json
2. Instalar as dependências com npm ou yarn: npm install 

3. Manter o package-lock.json e instalar as dependências de forma mais rápida:
npm ci

### Construção do Contêiner

1. Construir a imagem Docker:
docker build -t my-react-app .

2. Executar o contêiner
docker run -p 3000:80 my-react-app

Após a execução, a aplicação estará disponível em http://localhost:3000.

### Observações: Caso haja dúvida sobre a execução do contêiner verifique os Logs
docker logs my-react-app
