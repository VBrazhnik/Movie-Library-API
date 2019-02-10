const express = require('express');
const { Movie, validate } = require('../models/movie');
const router = express.Router();

router.get('/', async (request, response) => {
	try {
		response.json(await Movie.find().sort('title'));
	} catch (error) {
		response.status(500).send(error.message);
	}
});

router.post('/', async (request, response) => {
	try {
		const {error} = validate(request.body);

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
	} catch (error) {
		response.status(500).send(error.message);
	}
});

router.get('/:id', async (request, response) => {
	try {
		const movie = await Movie.findOne({ _id: request.params.id} );

		if (!movie)
			return (response.status(404).send('The movie with the given ID was not found'));

		response.json(movie);
	} catch (error) {
		response.status(500).send(error.message);
	}
});

router.put('/:id', async (request, response) => {
	try {
		const {error} = validate(request.body);

		if (error) return (response.status(400).send(error.details[0].message));

		const movie = await Movie.findOneAndUpdate({ _id: request.params.id },
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
	} catch (error) {
		response.status(500).send(error.message);
	}
});

router.delete('/:id', async (request, response) => {
	try {
		const movie = await Movie.findOneAndDelete({ _id: request.params.id });

		if (!movie)
			return (response.status(404).send('The movie with the given ID was not found'));

		response.json(movie);
	} catch (error) {
		response.status(500).send(error.message);
	}
});

module.exports = router;
