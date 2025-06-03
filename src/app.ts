import express, { Express } from 'express';
import jwtGuard from './middleware/jwt.guard';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { specs, swaggerUiOptions } from './config/swagger.config';
import registerRouter from './route/register.route';
import tossPaymentRoute from './route/tossPayment.route';

const app : Express = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'http://uosludex.com', 'https://uosludex.com'],
    credentials: true,
}));

// Swagger UI 설정
app.use('/purchase/api-docs', swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));

// middleware
app.use('/purchase/api/protected', jwtGuard);
app.use('/purchase/api/protected/register', registerRouter);
app.use('/purchase/api/protected/payment', tossPaymentRoute);

export default app;