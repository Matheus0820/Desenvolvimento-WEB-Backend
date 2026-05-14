import app from './app.js';

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor Rodando!")
     console.log(`API rodando em: http://localhost:${PORT}`)
})