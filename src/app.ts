import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { buildContactModule } from './core/containers/contact.container';
import { globalErrorHandler } from './core/middlewares/global-error.middleware';
dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/contacts', buildContactModule());

app.use(globalErrorHandler);

export default app;
