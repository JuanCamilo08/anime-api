import { Schema, model, Types } from 'mongoose';
import Joi from '@hapi/joi';

const schema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 70,
    unique: true,
  },
  description: {
    type: String,
    minlength: 10,
    maxlength: 1080,
  },
  creationDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  seasons: {
    type: Object,
    required: true,
    min: 1,
  },
  genre: {
    type: [Types.ObjectId],
    ref: 'genres',
    required: true,
  },
});

export default model('animes', schema);

export function animeValidator(anime) {
  const JoiSchema = Joi.object({
    name: Joi.string().required().min(4).max(70),
    description: Joi.string().required().min(10).max(1080),
    creationDate: Joi.date(),
    seasons: Joi.object().min(1).required(),
    genre: Joi.array().items(Joi.string())
  });

  return JoiSchema.validate(anime);
}
