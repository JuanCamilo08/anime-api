import Model, { animeValidator } from './model';

export const getAnimes = async (req, res) => {
  const animes = await Model.find();
  res.send(animes);
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
