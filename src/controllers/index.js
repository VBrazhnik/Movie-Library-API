const HttpStatus = require('http-status-codes');
const Movie = require('../models/movie');
const NotFoundError = require('../errors/not-found-error');

const findAll = async (request, response) => {
  response.status(HttpStatus.OK).json(await Movie.find().sort('title'));
};

const find = async ({ params }, response) => {
  const { id } = params;
  const movie = await Movie.findOne({ _id: id });

  if (!movie) {
    throw new NotFoundError('The movie with the given ID was not found');
  }

  response.status(HttpStatus.OK).json(movie);
};

const create = async ({ body }, response) => {
  const movie = new Movie(body);

  response.status(HttpStatus.CREATED).json(await movie.save());
};

const update = async ({ params, body }, response) => {
  const { id } = params;
  const movie = await Movie.findOneAndUpdate({ _id: id }, body, { new: true });

  if (!movie) {
    throw new NotFoundError('The movie with the given ID was not found');
  }

  response.status(HttpStatus.OK).json(movie);
};

const remove = async ({ params }, response) => {
  const { id } = params;
  const movie = await Movie.findOneAndDelete({ _id: id });

  if (!movie) {
    throw new NotFoundError('The movie with the given ID was not found');
  }

  response.status(HttpStatus.OK).json(movie);
};

module.exports = {
  findAll,
  find,
  create,
  update,
  remove,
};
