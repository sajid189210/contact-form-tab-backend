import app from './app'
import connectDB from './core/configs/connect-db.config';

const port = process.env.PORT || 8000;
const start = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log('Server is running on port 3000');
    });
}

start();
