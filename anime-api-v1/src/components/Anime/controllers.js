import _ from 'underscore';
import Model, { animeValidator } from './model';
import queryValidator from '../../utils/queryValidator';

export const getAnimes = async (req, res) => {
  const { error, value } = queryValidator(req.query);
  if (error) return res.status(400).json(error.details[0].message);

  const { page, limit = 50 } = value;

  const startIndex = (page - 1) * limit;
  const results = {};

  results.animes = await Model.find(
    _.pick(value, ['name', 'description', 'creationDate']),
  )
    .skip(startIndex)
    .limit(limit);
  if (results.animes.length === 0)
    return res.status(404).json('Anime not found.');

  results.nAnimes = results.animes.length;
  results.totalAnimes = await Model.estimatedDocumentCount();

  results.hasNextPage = (() => {
    const endIndex = page * limit;
    if (endIndex < results.totalAnimes) {
      return true;
    }
    return false;
  })();

  results.page = page;

  res.send(results);
};

export const getOneAnime = async (req, res) => {
  const anime = await Model.findById(req.params.id);
  if (!anime) res.status(404).json('Anime not found');

  res.send(anime);
};

export const createAnime = async (req, res) => {
  const { value, error } = animeValidator(req.body);
  if (error) return res.status(400).json(error.message);

  await new Model(value).save();

  res.status(201).json('Anime created!');
};

export const updateAnime = async (req, res) => {
  const { value, error } = animeValidator(req.body);
  if (error) return res.status(400).json(error.message);

  const anime = await Model.updateOne({ _id: req.params.id }, value);
  if (!anime) return res.status(404).json('Anime not found');

  if (!anime.n) return res.status(304).end();

  res.json('Updated successfully!');
};

export const deleteAnime = async (req, res) => {
  const anime = await Model.deleteOne({ _id: req.params.id });

  if (!anime.n) return res.status(404).json('Anime not found');

  res.send('deleted successfully!');
};
