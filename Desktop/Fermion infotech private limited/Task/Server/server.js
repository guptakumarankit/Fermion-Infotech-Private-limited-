import express from 'express'

const app = express();
const PORT = 5000;

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