import { Request, Response } from "express" // Importa os tipos do Express
import { Pet } from "../models/pet" // Importa o modelo Pet para acessar os dados dos animais
import { createMenuObject } from "../helpers/createMenuObject" // Função auxiliar para criar o menu dinâmico

// Controller responsável pela busca de animais pelo nome
export const search = async (req: Request, res: Response) => {
    let query: string = req.query.q as string // Obtém o termo de busca da query string (?q=...)

    if(!query) { // Se não houver termo de busca, redireciona para a home
        res.redirect('/');
        return;
    }

    let list = await Pet.getFromName(query) // Busca os pets pelo nome informado

    res.render('pages/page', { // Renderiza a página de resultados usando a mesma view de listagem
        menu: createMenuObject(''), // Nenhum item do menu fica ativo na busca
        list // Lista de animais encontrados
    });
}