# Autenticação com JWT

## Conceito:
- Ele é autenticação Stateless. Isso significa que não mantem o estado -> é apenas uma conexão cliente servidor - O servidor não sabe o que é, apenas responde a requisição.

- O fluxo do JWT: 
    - Rota de login -> Apresenta as credênciais (login e senha);

    - Recebe um token (string longa e complexa que possuem dados sobre o usuário e uma assinatura digital para o sistema verificar se foi ele que gerou) caso tenha permissão (credênciais corretas);

    - Acessa os recursos da API -> O token é passado no cabeçalho da requisição.

    - Cada requição possue uma verificação -> Verifica se o token é válido ou não está expirado.

## Parte de autenticação
- Vai ter um router de autenticação -> `./src/routes/auth.routes.js`

- Vai ter um middleware de autenticação -> `./src/middleware/auth.middleware.js`

- É necessário baixar o biblioteca do jwt:

`npm install jsonwebtoken body-parser`

- Código para gerar o token: 
```javascript

const token = jwt.sing(payload, JWT_SECRET, {expiresIn: '1h'}); // Token expira em 1 hora

```