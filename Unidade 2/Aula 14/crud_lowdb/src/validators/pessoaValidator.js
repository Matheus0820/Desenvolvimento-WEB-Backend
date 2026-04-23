import {body, validationResult} from 'express-validator';

export const pessoaValidator = [
    body('nome')
        .trim()
        .notEmpty().withMessage('O nome não pode ficar vazio')
        .isLength({ min:2 }).withMessage('O nome deve haver no mínimo duas letras'),

    body('etnia')
        .isIn(['Amaralo(a)', 'Branco(a)', 'Pardo(a)', 'Negro(a)']).withMessage('Etnia informada é inválida'),
    
    body('idade')
        .isInt({ min:0 }).withMessage('A idade tem que ser um valor inteiro positivo maior que zero'),
    
    (req, res, next) => {
        const erros = validationResult(req);

        if(!erros.isEmpty()) {
            return res.status(400).json({erros: erros.array()})
        }
        next()
    }

];