import { prisma } from "../database/db"; // importa o cliente Prisma

// Modelo Pet para interagir com a tabela de animais no banco de dados
export const Pet = {
    getAll: async () => { // Método para obter todos os animais
        return await prisma.pet.findMany(); 
    },
    getFromType: async (type: string) => { // Método para obter animais filtrados por tipo (dog, cat, fish)
        return await prisma.pet.findMany({
            where: { type }
        });
    },
    getFromName: async (name: string) => { // Método para obter animais filtrados por nome
        return await prisma.pet.findMany({
            where: { 
                name: { 
                    contains: name, 
                    mode: 'insensitive'
                }
            }
        });
    }
}