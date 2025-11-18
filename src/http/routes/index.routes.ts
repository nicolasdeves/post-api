import type { FastifyInstance } from "fastify";
import { consultaPorExpressao, consultaPost, consultaPosts, criar, deletar, quantidadePosts, test } from "../controllers/post.controller";

export async function indexRoutes(app: FastifyInstance) {
  app.post('/post',  criar);

  app.get('/post/count', quantidadePosts);

  app.get('/post/id/:id', consultaPost);

  app.get('/post', consultaPosts);

  app.get('/post/exp/:exp', consultaPorExpressao);

  app.get('/post/delete', deletar);

}