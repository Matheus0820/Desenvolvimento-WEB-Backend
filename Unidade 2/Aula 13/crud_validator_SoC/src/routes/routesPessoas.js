import { Router } from 'express';
import { listarPessoas, buscarPessoaId, criarPessoa, putPessoa, patchPessoa, deletarPessoa } from '../controllers/controllerPessoas.js';

const router = Router();

router.get('/', listarPessoas);
router.post('/', criarPessoa);
router.get('/:id', buscarPessoaId);
router.put('/:id', putPessoa);
router.patch('/:id', patchPessoa);
router.delete('/:id', deletarPessoa);

export default router;