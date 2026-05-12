# Controle de Acesso Baseado em Papéis (Autorização)

## O que faz:
Após o middleware de autenticação ele verifica o papel (role) desse usuário pode acessar aquela requisição que ele fez, caso esse tipo de papel não possa acessar essa rota ele não deixa passar para o controller específico daquela rota.

```textplain

Usuário faz requisição 
    -> Validação 
        -> Checagem de acesso - Autenticação (verifica o token informado no cabeçalho é válido) 
            -> Checa papel - Autorização
                -> Controller da rota -> Service 
                    -> Repositório

```

## Funcionamento base
Para isso funcionar os usuários, além dos campos já existentes, irão precisa de um novo campo para informar o papel dele.

```javascript

const newUser = {
    nome: dataUser.nome,
    user: dataUser.user,
    senha: dataUser.senha,
    role: dataUser.role, 
};

```