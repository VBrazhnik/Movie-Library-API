const Joi = require('@hapi/joi');

const createMovieSchema = Joi.object({
  title: Joi.string()
    .max(100)
    .required(),
  year: Joi.number()
    .min(1800)
    .max(3000)
    .required(),
  directors: Joi.array().items(Joi.string().max(100)),
  writers: Joi.array().items(Joi.string().max(100)),
  cast: Joi.array().items(Joi.string().max(100)),
});

module.exports = createMovieSchema;
