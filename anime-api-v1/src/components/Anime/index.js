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

router.get('/animes', getAnimes);
router.get('/animes/:id', validateObjectId, getOneAnime);
router.post('/animes', createAnime);
router.put('/animes/:id', validateObjectId, updateAnime);
router.delete('/animes/:id', validateObjectId, deleteAnime);

export default router;
