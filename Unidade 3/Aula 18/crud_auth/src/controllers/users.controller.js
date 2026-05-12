// Importar dados
import db from '../data/database.js'; // Importando o banco de dados lowdb

// Função de listar usuários
export const listarUsuarios = (req, res) => {
    res.status(200).json(db.data.usuarios)
}

// Função Buscar usuário por id
export const buscarUsuarioId = (req, res) => {
    const { id } = req.params;

    // Buscando usuário na lista
    const usuario = db.data.usuarios.find(usuario => usuario.id === Number(id))

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário com id informado não existe" })
    }

    res.status(200).json(usuario)
}

// Função Criar usuário
export const criarUsuario = async (req, res) => {
    const id = Number(Date.now());

    const { nome, login, senha } = req.body;

    const novoUsuario = {
        id,
        nome,
        login,
        senha
    };

    db.data.usuarios.push(novoUsuario);

    await db.write();

    res.status(201).json(novoUsuario)
}

// Função que faz alteração completa nos dados do usuário (PUT)
export const putUsuario = async (req, res) => {
    const { id } = req.params;

    const index_usuario = db.data.usuarios.findIndex(
        usuario => usuario.id === Number(id)
    );

    if (index_usuario === -1) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" })
    }

    const { nome, login, senha } = req.body;

    db.data.usuarios[index_usuario] = {
        id: Number(id),
        nome,
        login,
        senha
    };

    await db.write();

    res.status(200).json(db.data.usuarios[index_usuario])
}

// Função para fazer alteração parcial dos dados do usuário (PATCH)
export const patchUsuario = async (req, res) => {
    const { id } = req.params;

    const index_usuario = db.data.usuarios.findIndex(
        usuario => usuario.id === Number(id)
    );

    if (index_usuario === -1) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" })
    }

    const usuarioAtual = db.data.usuarios[index_usuario];

    const usuarioAtualizado = {
        ...usuarioAtual,
        ...req.body
    };

    db.data.usuarios[index_usuario] = usuarioAtualizado;

    await db.write();

    res.status(200).json(usuarioAtualizado)
}

// Função para remover usuário
export const deletarUsuario = async (req, res) => {
    const { id } = req.params;

    const index_usuario = db.data.usuarios.findIndex(
        usuario => usuario.id === Number(id)
    );

    if (index_usuario === -1) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" })
    }

    db.data.usuarios.splice(index_usuario, 1);

    await db.write();

    res.status(200).json({
        mensagem: `Usuário com id = ${id} foi removido com sucesso`
    })
}