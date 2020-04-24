import Joi from '@hapi/joi';

export default function (querys) {
  const schema = Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    creationDate: Joi.date(),
  });
  return schema.validate(querys, { abortEarly: false, allowUnknown: false });
}
