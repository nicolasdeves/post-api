import type { FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

export async function test() {
  return "ok";
}

interface CriarRouteGeneric extends FastifyRequest {
  Body: {
    quem: string;
    comentario: string;
    curtidas: number;
  };
}

export async function criar(request: FastifyRequest<CriarRouteGeneric>) {
  const post = await prisma.post.create({ data: request.body });
  return post;
}

export async function quantidadePosts() {
  const quantidade = await prisma.post.count();
  return quantidade;
}

export async function consultaPosts(request: FastifyRequest) {
  const posts = await prisma.post.findMany();

  return posts;
}

export async function consultaPost(request: FastifyRequest) {
  const { id } = request.params as { id: number };

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });

  return post;
}

export async function consultaPorExpressao(request: FastifyRequest) {
  const { exp } = request.params as { exp: string };

  const posts = await prisma.post.findMany({
    where: {
      comentario: {
        contains: exp.toLowerCase(),
      },
    },
  });

  return posts;
}
