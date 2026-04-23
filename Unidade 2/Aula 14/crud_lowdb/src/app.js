import express from 'express';
import routesPessoas from './routes/routesPessoas.js';

const app = express();

app.use(express.json());

app.use('/api/pessoas', routesPessoas);
export default app;