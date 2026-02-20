import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import todoRoute from './routes/todoRoute.js'
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ 
    // origin:"http:localhost:5173",
    methods : ["GET" , "POST" , "PUT" , "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials : true,
}));

// connect DB
connectDB();

// routes
// Data pass in the form of json format 
app.use(express.json()); 

// only give the data specific(allowed) frontend.
app.use("/todo" , todoRoute)

app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT} `)
})