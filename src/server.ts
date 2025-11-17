import { app } from './app';
import 'dotenv/config'

const apiPort = Number(process.env.PORT) || 3000
app
  .listen({
    host: '0.0.0.0',
    port: apiPort,
  })
  .then(() => {
    console.log('🚀 Server is running on port', apiPort);
  });