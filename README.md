# Movie Library RESTful API

A RESTful API server which supports basic CRUD operations.

Movie Library RESTful API was developed using MongoDB, Express.js and Node.js.

## Installation

Clone repository and install node modules:

```
$ git clone <repository url> <folder name>
$ cd <folder name>
$ npm install
```

Modify `config/default.json` for your environment and then run the following command:

```
$ node index
```

Also, you can initiate your database with a few records using the following command:

```
npm run import
```

But don't forget to modify it for your environment before execution.

This command will import data from `movie-library-sample.json` to your MongoDB.

## Movie

### Structure

Field|Data Type|Required|Options
:-----|:-----|:-----|:-----
`title`|String|Required|No longer than 100 characters
`year`|Number|Required|—
`directors`|Array of Strings|Not Required|Each string is no longer than 100 characters
`writers`|Array of Strings|Not Required|Each string is no longer than 100 characters
`cast`|Array of Strings|Not Required|Each string is no longer than 100 characters

### Schema

```
const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		maxlength: 100
	},
	year: {
		type: Number,
		required: true
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
```

### Example

```
{
	"title" : "The Girl with Dragon Tattoo",
	"year" : 2011,
	"directors" : [
		"David Fincher"
	],
	"writers" : [
		"Steven Zaillian",
		"Stieg Larsson"
	],
	"cast" : [
		"Daniel Craig",
		"Rooney Mara",
		"Christopher Plummer"
	]
}
```

## RESTful API

URL|HTTP Method|Body of Request|Response
:-----|:-----|:-----|:-----
`/api/movies`|`GET`|—|All movies
`/api/movies`|`POST`|JSON|Created movie
`/api/movies/:id`|`GET`|—|Movie with the given ID
`/api/movies/:id`|`PUT`|JSON|Updated movie
`/api/movies/:id`|`DELETE`|—|Deleted movie
