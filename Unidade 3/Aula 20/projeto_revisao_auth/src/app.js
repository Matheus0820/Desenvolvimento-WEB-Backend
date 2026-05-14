import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000;
let JWT_SECRET = "palavra_secreta_do_JWT"

// Middleware
const autentica = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({
            msg: "Token não informado"
        })
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            msg: "Token inválido"
        })
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET)

        req.usuario = payload;
        next();

    } catch (error) {
        return res.status(401).json({
            mensagem: "Token inválido ou expirado"
        });
    }
};

const autoriza = (papel) => {
    return (req, res, next) => {
        if (!(papel === req.user.papel)) {
            res.status(403).json({
                msg: "Usuário não autorizado!"
            })
        }

        next();
    }
}

// Dados
let usuarios = [
    {
        id: 1,
        nome: "João",
        login: "joao",
        senha: 123
    },
    {
        id: 2,
        nome: "Maria",
        login: "maria",
        senha: 456
    }
]

app.use(express.json());

app.get('/', (req, res) => {
    res.json({msg: "Hello, word"})
})

app.post('/login', (req, res) => {
    const dataLogin = req.body

    const userLogin = usuarios.find(user => user.login === dataLogin.login && user.senha === dataLogin.senha)

    if(!userLogin) {
        res.status(400).json({
            msg: "Credênciais inválidas"
        })
    }

    const payload = {
        id: userLogin.id,
        login: userLogin.login
    }

    // Criando Token
    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "1h"});

    return res.status(200).json({
        mgs: "Login realizado com sucesso",
        token_user: token
    });

});

app.get('/list', autentica, (req, res, next) => {
    const usuarios_get = usuarios;

    res.status(200).json({
        usuarios: usuarios_get
    })
});

export default app;