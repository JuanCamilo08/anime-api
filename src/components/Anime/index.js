import { Router } from 'express';
import { getAnimes, getOneAnime } from './controllers';

const router = Router();

router.get('/api/animes', getAnimes);
router.get('/api/animes/:id', getOneAnime);

export default router;
