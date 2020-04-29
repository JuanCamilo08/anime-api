import { Schema, model } from 'mongoose';
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
});

export default model('genres', schema);

export function genreValidator(genre) {
  const JoiSchema = Joi.object({
    name: Joi.string().required().min(4).max(70),
    description: Joi.string().required().min(10).max(1080),
  });

  return JoiSchema.validate(genre);
}
