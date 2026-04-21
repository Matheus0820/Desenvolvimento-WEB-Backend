import { Router } from 'express';
import { listarPets, criarPet } from '../controllers/petController.js';

const router = Router();

router.get('/', listarPets);
router.post('/', criarPet);

export default router;