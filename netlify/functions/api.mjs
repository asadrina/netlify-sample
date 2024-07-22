import express, { Router } from 'express';
import serverless from 'serverless-http';
import axios from 'axios';

export async function handler(event, context) {
  const app = express();
  const router = Router();
  router.get('/', (req, res) => res.send('Hello World!'));
  router.get('/todos', async (req, res) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch todos' });
    }
  });
  app.use('/api/', router);
  return serverless(app)(event, context);
}