import Joi from '@hapi/joi';

export default function (querys) {
  const schema = Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    creationDate: Joi.date(),
    limit: Joi.number(),
    page: Joi.number(),
  });
  return schema.validate(querys, { allowUnknown: false });
}
