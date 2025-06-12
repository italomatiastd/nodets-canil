import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mainRoutes from './routes/index';
import { createMenuObject } from './helpers/createMenuObject';

dotenv.config();

const server = express();

// Configuração do EJS
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(express.static(path.join(__dirname, '../public')));

// Rotas
server.use(mainRoutes);

server.use((req, res) => {
  res.render('pages/404', {
    menu: createMenuObject('')
  });
});
server.listen(process.env.PORT);