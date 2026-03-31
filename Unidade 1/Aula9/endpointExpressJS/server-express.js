import express from 'express';

const app = express()
const PORT = 3000;

app.get('/api/hello', (req, res) => {
    res.status(200).json({
        message: "Hello, men. This is my server -> By ExpressJS"
    });
});

app.get('/api/feijaocomfarinha', (req, res) => {
    res.status(200).json({
        message: "Hum... Deixa eu ver... Feijão com Farinha!"
    })
})

app.listen(PORT, () => {
    console.log("Server with ExpressJS - URL: http://localhost:3000/api/hello")
});