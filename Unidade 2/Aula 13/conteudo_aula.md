# Validadores
## Pasta de validadores: 
- ```/src/validators```

## Biblioteca responsável:
- Express Validator
- express-validator

## Código simples de utilização de um Validador
### Validator
```javascript

import {body, validationResult } from 'express-validator';

export const petValidator = [
    body('nome')
        .trim()
        .notEmpty().withMessage('O nome não pode estar vazio')
        .isLength({ min: 3 }).withMessage('O nome deve ter pelo menos 3 caracteres'),
    
    body('especie')
        .isIn(['Cão', 'Gato', 'Pássaro']).withMessage('Espécie inválida'),
    
    body('idade')
        .isInt({ min: 0}).withMessage('A idade deve ser um número inteiro positivo')
    
    (req, res, next) => {
        const erros = validationResult(req);
        if(!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }
        next();
    }
];

```

### Roteando com validador
- `src/routes/petRoutes.js`

```javascript
import { Router } from 'express';
import { petValidator } from '../validators/petValidator.js'
import { criarPet } from '../controllers/petController.js'

const router = Router();

router.post('/', petValidator, criarPet);

export default router;
```