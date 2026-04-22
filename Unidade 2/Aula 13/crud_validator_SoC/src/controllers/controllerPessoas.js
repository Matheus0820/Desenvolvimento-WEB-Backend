// Importar dados
import { pessoas } from '../data/pessoas.js'

// Função de listar pessoas
export const listarPessoas = (req, res) => {
    res.status(200).json(pessoas)
}

// Função Buscar pessoa por id
export const buscarPessoaId = (req, res) => {
    const { id } = req.params;

    // Buscando pessoa em uma lista de objeto de pessoas com o metódo 'find'
    const pessoa = pessoas.find(pessoa => pessoa.id === Number(id))

    if(!pessoa) {
        return res.status(404).json({mensagem: "Pessoa com id informado não existe"})
    }

    res.status(200).json(pessoa)
}

// Função Cria pessoa
export const criarPessoa = (req, res) => {
    const id = Number(Date.now());
    const novaPessoa = {id: id, ...req.body}

    pessoas.push(novaPessoa)
    res.status(201).json(novaPessoa)
}

// Função que faz alteração completa nos dados do usuário (PUT)
export const putPessoa = (req, res) => {
    const { id } = req.params;
    index_pessoa = pessoas.findIndex(pessoa => pessoa.id === Number(id))

    if(index_pessoa === -1) {
        return res.status(404).json({mensagem: "Pessoa não encontrada"})
    }

    pessoas[index_pessoa] = {id: Number(id), ...req.body}
}

// Função para fazer alteração em pelo menos um campo de pessoa (PATCH)
export const patchPessoa = (req, res) => {
    const { id } = req.params;
    const index_pessoa = pessoas.findIndex(pessoa => pessoa.id === Number(id))

    if(index_pessoa === -1) {
        return res.status(404).json({mensagem: "Pessoa não encontrada"})
    }

    const { nome, etnia, idade } = req.body
    if (nome === "") {
        nome = pessoas[index_pessoa].nome
    }
    if (etnia === "") {
        etnia = pessoas[index_pessoa].etnia
    }
    if (idade === "") {
        idade = pessoas[index_pessoa].idade
    }

    pessoas[index_pessoa] = {id: Number(id), nome: nome, etnia: etnia, idade: Number(idade)}
    res.status(200).json(pessoas[index_pessoa])

}

// Função para remover pessoa 
export const deletarPessoa = (req, res) => {
    const { id } = req.params;

    const index_pessoa = pessoas.findIndex(pessoa => pessoa.id === Number(id));

    if(index_pessoa === -1) {
        return res.status(404).json({mensagem: "Pessoa não encontrada"})
    }

    pessoas.splice(index_pessoa, 1)
    res.status(200).json({mensagem: `Pessoa com id = ${id} foi removida com sucesso`})

}