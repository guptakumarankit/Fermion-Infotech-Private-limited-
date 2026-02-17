import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js';
import profileRoute from './Routes/profileRoute.js'

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

connectDB()
 
app.use("/profile" , profileRoute);
 
app.listen(PORT , () => {
    console.log(`Backend is running on http://localhost:${PORT}`)
})