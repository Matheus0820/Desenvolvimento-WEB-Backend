import jwt from "jsonwebtoken";
import db from "../data/database.js";

const JWT_SECRET = process.env.JWT_SECRET || "segredo_super_secreto";

// Login de usuário
export const loginUsuario = (req, res) => {
    const { login, senha } = req.body;

    // Validação básica
    if (!login || !senha) {
        return res.status(400).json({
            mensagem: "Login e senha são obrigatórios"
        });
    }

    // Busca usuário
    const user = db.data.usuarios.find(
        user => user.login === login
    );

    // Usuário não encontrado
    if (!user) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    }

    // Verifica senha
    if (user.senha !== senha) {
        return res.status(401).json({
            mensagem: "Senha incorreta"
        });
    }

    // Payload do token
    const payload = {
        id: user.id,
        login: user.login
    };

    // Gera token
    const token = jwt.sign(
        payload,
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    // Resposta
    return res.status(200).json({
        mensagem: "Login realizado com sucesso",
        token
    });
};

export default loginUsuario;