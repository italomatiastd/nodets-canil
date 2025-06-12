# nodets-canil

[🔗 Acesse o projeto online no Render](https://petdevshop-312d.onrender.com/)

Projeto feito no módulo do curso Node + Typescript da b7Web.

## 📄 Sobre

Este projeto é uma aplicação web para um petshop, onde é possível visualizar, pesquisar e filtrar animais disponíveis para adoção.

A aplicação renderiza páginas dinâmicas com EJS, utilizando Node.js, Express, TypeScript e Prisma ORM com PostgreSQL.


## ✨ Funcionalidades

- Visualizar todos os animais disponíveis para adoção;
- Filtrar animais por tipo (cachorro, gato, peixe);
- Pesquisar animais pelo nome;
- Visualizar detalhes de cada animal (nome, cor, gênero, imagem);
- Página de erro personalizada para rotas não encontradas.


## 🎯 Objetivos

- Praticar o uso de Node.js com TypeScript;
- Aprender a estruturar um projeto Node.js com TypeScript;
- Implementar rotas e middleware com Express;
- Utilizar EJS para renderização de páginas dinâmicas;
- Integrar com banco de dados usando Prisma ORM;
- Configurar um ambiente de desenvolvimento com TypeScript e Nodemon.


## 🔎 Especificações

### Tecnologias

- Node.js
- TypeScript
- EJS
- Express
- Prisma ORM
- PostgreSQL

### Dependências

#### Desenvolvimento

- @types/ejs
- @types/express
- @types/node
- prisma

#### Produção

- express
- ejs
- dotenv
- @prisma/client


## ⚙️ Configuração para rodar o projeto

### Pré-requisitos globais

```sh
npm i -g nodemon typescript ts-node
```

### Instalação

1. **Instale as dependências:**
   ```
   npm install
   ```

2. **Configure o arquivo `.env`:**

   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo (ajuste conforme seu ambiente):

   ```
   PORT=4000
   DATABASE_URL="postgresql://postgres:1234@localhost:5432/node_prisma?schema=public"
   ```

3. **Configure o banco de dados:**
   - Certifique-se de ter um banco PostgreSQL rodando.
   - Execute as migrations:
     ```
     npx prisma migrate dev
     ```

4. **(Opcional) Popule o banco com dados de exemplo:**
   ```
   npm run seed
   ```

# 💻 Como rodar o projeto

### Em desenvolvimento (TypeScript direto)
```
npm run start-dev
```
Acesse: [http://localhost:4000](http://localhost:4000)

### Em produção (compilado para JavaScript)
1. Compile o projeto:
   ```
   npm run build
   ```
2. Inicie o servidor:
   ```
   npm start
   ```

## 📝 Scripts disponíveis

- `npm run start-dev` — Inicia o servidor em modo desenvolvimento com `nodemon` e TypeScript.
- `npm run build` — Compila o código TypeScript para JavaScript na pasta `dist`.
- `npm start` — Executa o servidor a partir do código compilado.
- `npm run seed` — Popula o banco de dados com dados de exemplo (se o script estiver configurado).
- `npx prisma migrate dev` — Executa as migrations do banco de dados.
- `npx prisma studio` — Abre o Prisma Studio para visualizar o banco de dados.