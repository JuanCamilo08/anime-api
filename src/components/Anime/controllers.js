import { Types } from 'mongoose';
import Model from './model';

export const getAnimes = async (req, res) => {
  const animes = await Model.find();
  res.send(animes);
};

export const getOneAnime = async (req, res) => {
  if (!Types.ObjectId.isValid(req.params.id))
    res.status(400).json('Invalid ID');

  const anime = await Model.findById(req.params.id);
  if (!anime) res.status(404).json('Anime not found');

  res.send(anime);
};
