import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function insertMany(n: number) {
  const posts = [];

  for (let i = 0; i < n; i++) {
    posts.push({
      quem: `User${i}`,
      dataHora: new Date(),
      comentario: `Comentário gerado ${i}`,
      campo_extra: `extra ${i}`,
      curtidas: i
    });
  }

  await prisma.post.createMany({
    data: posts,
  });

  console.log(`${n} posts inseridos`);
  await prisma.$disconnect();
}

// Pega o número de inserções pelo argumento de linha de comando
const amount = parseInt(process.argv[2] || '');
if (!amount) {
  console.error("Informe a quantidade: node insert.js 1000");
  process.exit(1);
}

insertMany(amount);