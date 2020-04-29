import Genre, { genreValidator } from './model';

export const getAllGenres = async (req, res) => {
  const genres = await Genre.find();

  res.send(genres);
};

export const createGenre = async (req, res) => {
  const { error, value } = genreValidator(req.body);
  if (error) return res.status(400).json(error.message);

  await new Genre(value).save();

  res.status(201).json('Genre created!');
};

export const deleteGenre = async (req, res) => {
  const genre = await Genre.deleteOne({ name: req.params.name });
  if (genre.n === 0) return res.status(404).json('genre not found.');

  res.json('genre deleted!');
};

export const updateGenre = async (req, res) => {
  const { error, value } = genreValidator(req.body);
  if (error) return res.status(400).json(error.message);

  const genre = await Genre.updateOne({ name: req.params.name }, value);
  if (!genre) return res.status(404).json('genre not found.');

  res.send(genre);
};
