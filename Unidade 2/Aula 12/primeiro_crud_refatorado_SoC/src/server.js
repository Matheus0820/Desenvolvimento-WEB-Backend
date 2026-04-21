import app from './app.js';

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor Iniciado!");
    console.log(`API funcionando na URL: http://localhost:${PORT}/api/pets`)
})