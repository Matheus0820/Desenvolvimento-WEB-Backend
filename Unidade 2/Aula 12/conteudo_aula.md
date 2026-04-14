# Introdução à Separação de Responsabilidade (SoC)

## Organização de Pastas do projeto
```
/meu_projeto
    src/
        controllers/ # Lógica da API -> Funções
        reoutes/ # Rotas do projeto
        server.js
globais
    package.json
    node_modules/
```

### Roteador (routes)
- `express.Router()`
- Vai mandar chamar uma função do controlador quando for acessado certa URL da API
- Exemplo:
```javascript
import { Router } from 'express';
import { listarPets, criarPet } from '../controllers/petController.js';

const router = Router();

router.get('/', listarPets);
router.post('/', criarPet);

export default router;
```


### Controladores (controlles)
- Funções que possuem as lógicas implementadas a API
- Agora no momento ele faz tratamento de dados, requisição exibição desses dados
- Exemplo: 

```javascript
// Simulação de banco de dados
let pets = [{id: 1, nome: "Pitoco", especie: "Cachorro"}]

export const listarPets = (req, res) => {
    res.status(200).json
};

export const criarPet = (req, res) => {
    const novoPet = { id: Date.now(), ...req.body };
    pets.push(novoPet);
    res.status(201).json(novoPet);
}
```

### Server
- Exemplo após o uso do padrão SoC:
```javascript

import express from 'express';
import petRoutes from './routes/petRoutes.js';

const app = express();
app.use(express.json());

// Montamos as rotas de pets no prefixo /pets
app.use('/pets', petRoutes);

app.listen(3000, () => console.log("🚀 Servidor organizado rodando na porta 3000"));
```

## Separação de app.js de server.js
- Isso permite fazer teste sem necessariamente ligar o servidor
- Torna tudo mais organizado
- Nesse padrão o `server.js` que vai ser nosso arquivo principal, vai chamar o `app.js` para rodar o servidor.
- Estrutura do `app.js` agora:
```javascript
import express from 'express';
import petRoutes from './routes/petRoutes.js';

const app = express();

app.use(express.json());

// Todas as rotas de pets agora começam com /api/pets
app.use('/api/pets', petRoutes);
export default app;
```

- Estrutura do `server.js` agora:
```javascript

import app from './app.js';

const PORT = 3000;

app.listen(PORT, () => {
 console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
 console.log(`🐾 API de Pets disponível em http://localhost:${PORT}/api/pets`);
});

```

## O Banco de dados em arquivos separados
- Guardar dados em uma pasta ao invés de um arquivo
- Nomes de pasta de dados: `data` ou `models`
- O controlador vai precisar exportar a variavel do arquivo de dados

### Estrutura desse banco de dados em arquivos
- Caminho da pasta: `src/data/petData.js`
- Exemplo:
```javascript
// Exportamos o array para que os controllers possam usá-lo
export let pets = [
 { id: 1, nome: "Paçocão", especie: "Cão", raça: "Labrador", idade: 3 },
 { id: 2, nome: "Frajola", especie: "Gato", raça: "SRD", idade: 5 }
];
```

## Estrutura final do projeto
```
/projeto-api
├── src/
│ ├── data/
│ │ └── petData.js # Nosso "Banco de Dados"
│ ├── controllers/
│ │ └── petController.js # Lógica de Negócio
│ ├── routes/
│ │ └── petRoutes.js # Definição das Rotas
│ ├── app.js # Configuração da API (Prefixos/Middlewares)
│ └── server.js # Inicialização (Entry Point)
├── package.json
```

# Middleware
- Funções que são execultadas entre as requisições e o envio das respostas
- Podem ser usados como mecanismo de segurança, como por exemplo na validação de acesso de usuários. 
- O `next();` ele permite que o middleware continue  para próxima função sem parar a execulção da rota.

- Exemplo de Middleware: 
    - `app.use(express.json())` -> Transforma os dados recebidos em um objeto JavaScript
    - `app.use('/rota', funcaoASerChamada)` -> Exemplo de Middleeare usado no tratamento das rotas 
- Outra forma de chamar middleware:
    - `router.post('\', validarPet, criarPet)` -> Criar pet vai ser chamado apenas se a validação der certo.