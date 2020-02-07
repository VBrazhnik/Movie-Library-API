const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 100,
    required: true,
  },
  year: {
    type: Number,
    min: 1800,
    max: 3000,
    required: true,
  },
  directors: [
    {
      type: String,
      maxlength: 100,
    },
  ],
  writers: [
    {
      type: String,
      maxlength: 100,
    },
  ],
  cast: [
    {
      type: String,
      maxlength: 100,
    },
  ],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
