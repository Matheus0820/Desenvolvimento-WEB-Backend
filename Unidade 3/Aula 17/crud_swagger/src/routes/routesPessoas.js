import { Router } from 'express';
import { listarPessoas, buscarPessoaId, criarPessoa, putPessoa, patchPessoa, deletarPessoa } from '../controllers/controllerPessoas.js';
import { pessoaValidator } from '../validators/pessoaValidator.js';

const router = Router();


/**  
 * @swagger
 * /api/pessoas:
 *   get:
 *     summary: Retorna uma lista de pessoas
 *     tags:
 *       - Pessoas
 *     responses:
 *       200:
 *         description: Lista de pessoas retornada com sucesso
*/
router.get('/', listarPessoas);

/** 
 * @swagger
 * /api/pessoas:
 *   post:
 *     summary: Cria uma nova pessoa
 *     tags:
 *       - Pessoas
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Pessoa criada com sucesso
*/
router.post('/', pessoaValidator, criarPessoa);

/** 
 * @swagger
 * /api/pessoas/{id}:
 *   get:
 *     summary: Retorna uma pessoa pelo ID
 *     tags:
 *       - Pessoas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pessoa retornada com sucesso
 *       404:
 *         description: Pessoa não encontrada
*/
router.get('/:id', buscarPessoaId);

/** 
 * @swagger
 * /api/pessoas/{id}:
 *   put:
 *     summary: Atualiza uma pessoa pelo ID
 *     tags:
 *       - Pessoas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Pessoa atualizada com sucesso
 *       404:
 *         description: Pessoa não encontrada
*/
router.put('/:id', putPessoa);
router.patch('/:id', patchPessoa);
router.delete('/:id', deletarPessoa);

export default router;