import app from './app'
import connectDB from './core/configs/connect-db.config';

const start = async () => {
    await connectDB()
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}

start();
