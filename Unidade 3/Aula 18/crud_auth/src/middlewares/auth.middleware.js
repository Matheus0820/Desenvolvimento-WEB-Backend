import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "segredo_super_secreto";

export const autenticarToken = (req, res, next) => {
    // Pega o token do header Authorization
    const authHeader = req.headers.authorization;

    // Verifica se o header existe
    if (!authHeader) {
        return res.status(401).json({
            mensagem: "Token não informado"
        });
    }

    // Formato esperado: Bearer TOKEN
    const [, token] = authHeader.split(" ");

    // Verifica se o token existe
    if (!token) {
        return res.status(401).json({
            mensagem: "Token inválido"
        });
    }

    try {
        // Verifica e decodifica o token
        const payload = jwt.verify(token, JWT_SECRET);

        // Salva dados do usuário na requisição
        req.usuario = payload;

        // Continua para a próxima função
        next();

    } catch (error) {
        return res.status(401).json({
            mensagem: "Token inválido ou expirado"
        });
    }
};

export default autenticarToken;