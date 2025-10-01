import express from 'express';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
import connectDB from './lib/db.js';
import cookieParser from 'cookie-parser';

//we need to load the .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//we need to use the json parser to parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});