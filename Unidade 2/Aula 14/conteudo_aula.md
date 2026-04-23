# Persistência com LowDB

## Instalação
`npm install lowdb`

## Confguração do lowdb
### Caminho do arquivo
- `./src/config/database.js`

### Código
```javascript
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
const defaultData = { users: [], pets: [] };
const adapter = new JSONFile('db.json');
const db = new Low(adapter, defaultData);
await db.read();
export default db;
```

## Utilizando ele no projeto
### Importação
```javascript
import db from '../config/database.js'; // Importa nossa instância do DB
```

### Utilizando para adição de dados
```javascript
// 4. Adiciona o novo usuário ao array 'users' dentro do objeto de dados do db
db.data.users.push(novoUser);

// 5. Salva o estado atual dos dados no arquivo 'db.json'. ESSENCIAL!
await db.write();
```

### Utilizando para resgatar todos os dados
```javascript
// GET: Listar todos os usuários
usersRouter.get('/', (req, res) => {
 // 7. Simplesmente retorna a lista de usuários do banco de dados
 res.status(200).json(db.data.users);
});
```

### Retornando um dados pelo ID
```javascript
petsRouter.get('/:id', petIdRules(), validateRequest, (req, res) => {
 const id = parseInt(req.params.id);

 // 7. Procura no objeto de dados do db
 const pet = db.data.pets.find(p => p.id === id);
 if (!pet) {
 return res.status(404).json({ message: 'Pet não encontrado.' });
 }
 res.status(200).json(pet);
});

```