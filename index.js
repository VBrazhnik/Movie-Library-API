const config = require('config');

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const movies = require('./routes/movies');

const mongoose = require('mongoose');

const app = express();

mongoose.connect(`mongodb://${config.get('database.host')}/${config.get('database.name')}`,
	{ useNewUrlParser: true, useFindAndModify: false })
	.then(() => console.log(`Successfully connected to MongoDB database ` +
		`with "${config.get('database.name')}" name`))
	.catch((error) => console.error(`Cannot connect to MongoDB: ${error}`));

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.use(morgan('tiny'));

app.use('/api/movies/', movies);

app.listen(config.get('server.port'), config.get('server.host'),
	() => console.log(`Server is running on ${config.get('server.host')}:${config.get('server.port')}`));
