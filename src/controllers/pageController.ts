import { Request, Response } from "express"; // Importa os tipos do Express
import { Pet } from "../models/pet"; // Importa o modelo Pet para acessar os dados dos animais
import { createMenuObject } from "../helpers/createMenuObject"; // Função auxiliar para criar o menu dinâmico

// Controller para a página inicial, lista todos os animais
export const home = async (req: Request, res: Response) => {
    let list = await Pet.getAll(); // Busca todos os pets no banco de dados

    res.render('pages/page', { // Renderiza a view 'pages/page' passando os dados necessários
        menu: createMenuObject('all'), // Define o item do menu ativo
        banner: {
            title: 'Todos os animais', // Título do banner
            background: 'allanimals.jpg' // Imagem de fundo do banner
        },
        list // Lista de animais a ser exibida
    });
}

// Controller para a página de cachorros
export const dogs = async (req: Request, res: Response) => {
    let list = await Pet.getFromType('dog'); // Busca apenas os pets do tipo 'dog'

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}

// Controller para a página de gatos
export const cats = async (req: Request, res: Response) => {
    let list = await Pet.getFromType('cat'); // Busca apenas os pets do tipo 'cat'

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}

// Controller para a página de peixes
export const fishes = async (req: Request, res: Response) => {
    let list = await Pet.getFromType('fish') // Busca apenas os pets do tipo 'fish'

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}