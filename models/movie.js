const mongoose = require('mongoose');
const Joi = require('joi');

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		maxlength: 100
	},
	year: {
		type: Number,
		required: true,
		min: 1800,
		max: 3000
	},
	directors: [{
		type: String,
		maxlength: 100
	}],
	writers: [{
		type: String,
		maxlength: 100
	}],
	cast: [{
		type: String,
		maxlength: 100
	}]
});

const Movie = mongoose.model('Movie', movieSchema);

const validate = (movie) => {
	const schema = {
		title: Joi.string().max(100).required(),
		year: Joi.number().min(1800).max(3000).required(),
		directors: Joi.array().items(Joi.string().max(100)),
		writers: Joi.array().items(Joi.string().max(100)),
		cast: Joi.array().items(Joi.string().max(100))
	};

	return (Joi.validate(movie, schema));
};

module.exports = {
	movieSchema,
	Movie,
	validate
};
