import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { buildContactModule } from './core/containers/contact.container';
import { globalErrorHandler } from './core/middlewares/global-error.middleware';
dotenv.config();

const app = express();

const allowedOrigins = process.env.ALLOWED_URLS || '';

app.use(helmet());
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (origin.startsWith("http://localhost")) {
            return callback(null, true);
        }
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/contacts', buildContactModule());

app.use(globalErrorHandler);

export default app;
