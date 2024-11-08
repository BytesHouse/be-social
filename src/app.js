import express from 'express';
import cors from 'cors';
import { v2 as cloudinary } from 'cloudinary';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import searchRoutes from './routes/searchRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import followRoutes from './routes/followRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import { specs, swaggerUi } from './swagger.js';

// Настройка Cloudinary
cloudinary.config({
    cloud_name: 'dc9xg0zud',
    api_key: '158937964864549',
    api_secret: 'mTRUTCe_tL02UhG1X2z71ap6kDk'
})

// Инициализация приложения Express
const app = express();

// Middleware для обработки CORS
app.use(cors());

// Middleware для обработки JSON
app.use(express.json());

// Подключение swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

// Подключение маршрутов
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/follow', followRoutes);
app.use('/api/notifications', notificationRoutes);

// Экспорт приложения для использования в server.js
export default app;