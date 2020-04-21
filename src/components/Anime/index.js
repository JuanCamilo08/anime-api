import { Router } from 'express';
import {
  getAnimes,
  getOneAnime,
  createAnime,
  updateAnime,
  deleteAnime,
} from './controllers';
import validateObjectId from '../../middlewares/validateObjectId';

const router = Router();

router.get('/api/animes', getAnimes);
router.get('/api/animes/:id', validateObjectId, getOneAnime);
router.post('/api/animes', createAnime);
router.put('/api/animes/:id', validateObjectId, updateAnime);
router.delete('/api/animes/:id', validateObjectId, deleteAnime);

export default router;
