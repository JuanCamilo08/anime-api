import { Router } from 'express';
import { getAllGenres, createGenre, deleteGenre } from './controllers';

const router = Router();

router.get('/genres', getAllGenres);
router.post('/genres', createGenre);
router.delete('/genres/:name', deleteGenre);

export default router;
