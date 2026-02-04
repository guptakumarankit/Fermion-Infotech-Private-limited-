import express from 'express'
import connectDB from './config/db.js';
import mongoose from 'mongoose';


const app = express();
const PORT = 5000;

// routes
app.use(express.json());

// connect DB
connectDB();

app.get('/' , (req , res) => {
    res.send("This is Home Page")
})

app.get('/about' , (req , res) => {
    res.send("This is About Page")
})

app.get('/about/:id' , (req , res) => {
    res.send(`This is dynamic url Page ${req.params.id}`)
})

app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT} `)
})