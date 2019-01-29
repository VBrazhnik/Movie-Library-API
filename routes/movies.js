const express = require('express');
const { Movie, validate } = require('../models/movie');
const router = express.Router();

router.get('/', async (request, response) => {
	const movies = await Movie.find().sort('title');

	response.json(movies);
});

router.post('/', async (request, response) => {
	const { error } = validate(request.body);

	if (error)
		return (response.status(400).send(error.details[0].message));

	let movie = new Movie({
		title: request.body.title,
		year: request.body.year,
		directors: request.body.directors,
		writers: request.body.writers,
		cast: request.body.cast
	});

	response.json(await movie.save());
});

router.get('/:id', async (request, response) => {
	const movie = await Movie.findById(request.params.id);

	if (!movie)
		return (response.status(404).send('The movie with the given ID was not found'));

	response.json(movie);
});

router.put('/:id', async (request, response) => {
	const { error } = validate(request.body);

	if (error) return (response.status(400).send(error.details[0].message));

	const movie = await Movie.findByIdAndUpdate(request.params.id,
		{
			title: request.body.title,
			year: request.body.year,
			directors: request.body.directors,
			writers: request.body.writers,
			cast: request.body.cast
		}, { new: true });

	if (!movie)
		return (response.status(404).send('The movie with the given ID was not found'));

	response.json(movie);
});

router.delete('/:id', async (request, response) => {
	const movie = await Movie.findByIdAndRemove(request.params.id);

	if (!movie)
		return (response.status(404).send('The movie with the given ID was not found'));

	response.json(movie);
});

module.exports = router;
