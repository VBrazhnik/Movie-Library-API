const config = require('./config');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const movies = require('./routes/movies');

const app = express();

mongoose
  .connect(config.database.url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(error => console.error(`Cannot connect to MongoDB: ${error}`));

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use('/api/movies/', movies);

app.listen(config.server.port, config.server.host, () => {
  console.log(`Server is running on ${config.server.host}:${config.server.port}`);
});
