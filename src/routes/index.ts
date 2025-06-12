import { Router } from 'express'; // Importa o Router do Express para criar rotas
import * as PageController from '../controllers/pageController' // Importa os controladores de página
import * as SearchController from '../controllers/searchController' // Importa o controlador de busca

const router = Router(); // Cria uma instância do Router para definir as rotas da aplicação

router.get('/', PageController.home); // Rota para a página inicial, que lista todos os animais
router.get('/dogs', PageController.dogs); // Rota para a página de cachorros
router.get('/cats', PageController.cats); // Rota para a página de gatos
router.get('/fishes', PageController.fishes); // Rota para a página de peixes

router.get('/search', SearchController.search); // Rota para buscar animais pelo nome

export default router; // Exporta o router para ser usado no servidor principal