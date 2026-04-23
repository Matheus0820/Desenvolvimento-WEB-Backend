// Importar dados
// import { pessoas } from '../data/pessoas.js'
import db from '../data/database.js'; // Importando o banco de dados lowdb

// Função de listar pessoas
export const listarPessoas = (req, res) => {
    res.status(200).json(db.data.pessoas)
}

// Função Buscar pessoa por id
export const buscarPessoaId = (req, res) => {
    const { id } = req.params;

    // Buscando pessoa em uma lista de objeto de pessoas com o metódo 'find'
    const pessoa = db.data.pessoas.find(pessoa => pessoa.id ===  Number(id))


    if(!pessoa) {
        return res.status(404).json({mensagem: "Pessoa com id informado não existe"})
    }

    res.status(200).json(pessoa)
}

// Função Cria pessoa
export const criarPessoa = async (req, res) => {
    const id = Number(Date.now());
    const novaPessoa = {id: id, ...req.body}

    db.data.pessoas.push(novaPessoa)
    await db.write();
    res.status(201).json(novaPessoa)
}

// Função que faz alteração completa nos dados do usuário (PUT)
export const putPessoa = async (req, res) => {
    const { id } = req.params;
    const index_pessoa = db.data.pessoas.findIndex(pessoa => pessoa.id === Number(id))

    if(index_pessoa === -1) {
        return res.status(404).json({mensagem: "Pessoa não encontrada"})
    }

    db.data.pessoas[index_pessoa] = {id: Number(id), ...req.body}
    await db.write();
}

// Função para fazer alteração em pelo menos um campo de pessoa (PATCH)
export const patchPessoa = async (req, res) => {
    const { id } = req.params;
    const index_pessoa = db.data.pessoas.findIndex(pessoa => pessoa.id === Number(id))

    if(index_pessoa === -1) {
        return res.status(404).json({mensagem: "Pessoa não encontrada"})
    }

    const { nome, etnia, idade } = req.body
    if (nome === "") {
        nome = db.data.pessoas[index_pessoa].nome
    }
    if (etnia === "") {
        etnia = db.data.pessoas[index_pessoa].etnia
    }
    if (idade === "") {
        idade = db.data.pessoas[index_pessoa].idade
    }

    db.data.pessoas[index_pessoa] = {id: Number(id), nome: nome, etnia: etnia, idade: Number(idade)}
    await db.write();
    res.status(200).json(db.data.pessoas[index_pessoa])

}

// Função para remover pessoa 
export const deletarPessoa = async (req, res) => {
    const { id } = req.params;

    const index_pessoa = db.data.pessoas.findIndex(pessoa => pessoa.id === Number(id));

    if(index_pessoa === -1) {
        return res.status(404).json({mensagem: "Pessoa não encontrada"})
    }

    db.data.pessoas.splice(index_pessoa, 1)
    await db.write();
    res.status(200).json({mensagem: `Pessoa com id = ${id} foi removida com sucesso`})

}