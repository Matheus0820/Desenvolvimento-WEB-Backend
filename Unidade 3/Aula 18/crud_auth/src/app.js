import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import routesPessoas from './routes/routesPessoas.js';
import usersRoutes from './routes/users.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(express.json());

// Swagger UI 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/pessoas', routesPessoas);
app.use('/api/usuarios', usersRoutes);
app.use('/auth', authRoutes);

export default app;