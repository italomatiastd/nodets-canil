import express from 'express';
import dotenv from 'dotenv'; // Importa o módulo dotenv para carregar variáveis de ambiente
import path from 'path'; // Importa o módulo path para manipulação de caminhos de arquivos
import mainRoutes from './routes/index'; // Importa as rotas principais da aplicação
import { createMenuObject } from './helpers/createMenuObject'; // Importa a função auxiliar para criar o menu dinâmico

dotenv.config(); 

const server = express(); // Cria uma instância do servidor Express

// Configuração do EJS
server.set('view engine', 'ejs'); // Define o EJS como motor de visualização
server.set('views', path.join(__dirname, '../views')); // Define o diretório de views

server.use(express.static(path.join(__dirname, '../public'))); // Define o diretório público para arquivos estáticos

// Rotas
server.use(mainRoutes); 

server.use((req, res) => { // Middleware para tratar rotas não encontradas (404)
  res.render('pages/404', {
    menu: createMenuObject('')
  });
});
server.listen(process.env.PORT); 