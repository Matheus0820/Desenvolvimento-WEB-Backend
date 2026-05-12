import { Router } from 'express';

import {
    listarUsuarios,
    buscarUsuarioId,
    criarUsuario,
    putUsuario,
    patchUsuario,
    deletarUsuario
} from '../controllers/users.controller.js';

import { autenticarToken } from '../middlewares/auth.middleware.js';

const router = Router();

/**  
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Retorna uma lista de usuários
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *       401:
 *         description: Token inválido ou não informado
*/
router.get('/', autenticarToken, listarUsuarios);

/** 
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Cadastra um novo usuário no sistema
 *     tags:
 *       - Usuários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - login
 *               - senha
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João Silva
 *               login:
 *                 type: string
 *                 example: joao123
 *               senha:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/', criarUsuario);

/** 
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário retornado com sucesso
 *       401:
 *         description: Token inválido ou não informado
 *       404:
 *         description: Usuário não encontrado
*/
router.get('/:id', autenticarToken, buscarUsuarioId);

/** 
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
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
 *         description: Usuário atualizado com sucesso
 *       401:
 *         description: Token inválido ou não informado
 *       404:
 *         description: Usuário não encontrado
*/
router.put('/:id', autenticarToken, putUsuario);

/** 
 * @swagger
 * /api/usuarios/{id}:
 *   patch:
 *     summary: Atualiza parcialmente um usuário pelo ID
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
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
 *         description: Usuário atualizado parcialmente com sucesso
 *       401:
 *         description: Token inválido ou não informado
 *       404:
 *         description: Usuário não encontrado
*/
router.patch('/:id', autenticarToken, patchUsuario);

/** 
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Remove um usuário pelo ID
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário removido com sucesso
 *       401:
 *         description: Token inválido ou não informado
 *       404:
 *         description: Usuário não encontrado
*/
router.delete('/:id', autenticarToken, deletarUsuario);

export default router;