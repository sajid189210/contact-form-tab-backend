import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/app.error';

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    // Default error values
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';

    // Handle specific error types if needed (e.g., Mongoose validation errors)
    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = 'Database Validation Error';
    } else if (err.name === 'CastError') {
        statusCode = 400;
        message = 'Invalid ID';
    }

    // Handle operational vs programming errors
    if (err instanceof AppError) {
        // Operational error: trusted error
        res.status(statusCode).json({
            status: 'error',
            message: message,
        });
    } else {
        // Programming or other unknown error: don't leak details to client
        console.error('[ERROR]:', err); // Log the error for debugging

        res.status(statusCode).json({
            status: 'error',
            message: statusCode === 500 ? 'Something went wrong!' : message,
            // Include stack trace only in development
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
        });
    }
};
