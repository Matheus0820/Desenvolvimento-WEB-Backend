import { Router } from 'express';
import { loginUsuario } from '../controllers/auth.controller.js';

const router = Router();

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Autentica um usuário no sistema
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - login
 *               - senha
 *             properties:
 *               login:
 *                 type: string
 *                 example: admin
 *               senha:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Usuário autenticado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *       401:
 *         description: Login ou senha inválidos
 *       404:
 *         description: Usuário não encontrado
 */
router.post('/', loginUsuario);

export default router;
