import { prisma } from "./db";

async function main() {
    await prisma.pet.createMany({
        data: [
            { type: 'dog', image: 'pastor-alemao.jpg', name: 'Pastor-alemão', color: 'Amarelo e Preto', genre: 'Masculino' },
            { type: 'dog', image: 'labrador.jpg', name: 'Labrador-retriever', color: 'Branco', genre: 'Masculino' },
            { type: 'dog', image: 'zwergspitz.jpg', name: 'Zwergspitz', color: 'Amarelo', genre: 'Feminino' },
            { type: 'dog', image: 'husky.jpg', name: 'Husky Siberiano', color: 'Branco e Preto', genre: 'Masculino' },
            { type: 'dog', image: 'golden.jpg', name: 'Golden Retriever', color: 'Amarelo', genre: 'Masculino' },
            { type: 'dog', image: 'poodle.jpg', name: 'Poodle', color: 'Branco', genre: 'Feminino' },
            { type: 'dog', image: 'bulldog.jpg', name: 'Bulldog', color: 'Branco e Amarelo', genre: 'Masculino' },
            { type: 'cat', image: 'persa.jpg', name: 'Persa', color: 'Amarelo', genre: 'Masculino' },
            { type: 'cat', image: 'mainecoon.jpg', name: 'Maine Coon', color: 'Preto e Branco', genre: 'Masculino' },
            { type: 'cat', image: 'bengal.jpg', name: 'Bengal', color: 'Branco, Preto e Amarelo', genre: 'Feminino' },
            { type: 'cat', image: 'siames.jpg', name: 'Siamês', color: 'Amarelo e Preto', genre: 'Masculino' },
            { type: 'cat', image: 'sphynx.jpg', name: 'Sphynx', color: 'Branco', genre: 'Masculino' },
            { type: 'fish', image: 'neon.jpg', name: 'Tetra Neon', color: 'Vermelho e Azul', genre: 'Masculino' },
            { type: 'fish', image: 'matogrosso.jpg', name: 'Mato Grosso', color: 'Laranja', genre: 'Masculino' },
            { type: 'fish', image: 'limpavidro.jpg', name: 'Limpa Vidro', color: 'Verde e Branco', genre: 'Masculino' },
            { type: 'fish', image: 'tanictis.jpg', name: 'Tanictis', color: 'Vermelho', genre: 'Masculino' },
            { type: 'fish', image: 'acara.jpg', name: 'Acará Bandeira', color: 'Preto', genre: 'Masculino' },
        ]
    });
    console.log('Dados inseridos com sucesso')
};

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });