import { prisma } from "../database/db";

export const Pet = {
    getAll: async () => {
        return await prisma.pet.findMany();
    },
    getFromType: async (type: string) => {
        return await prisma.pet.findMany({
            where: { type }
        });
    },
    getFromName: async (name: string) => {
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