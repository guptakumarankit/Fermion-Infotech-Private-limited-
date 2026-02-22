import express from 'express';
import { connectDB } from './Configs/db.js';
import imageRoute from './Routes/imageRoute.js';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// connect mongoDB..
connectDB();
app.use(cors());

app.use(express.json());
app.use('/image' , imageRoute)

app.listen(PORT , () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
})