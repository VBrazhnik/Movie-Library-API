const HttpStatus = require('http-status-codes');

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, request, response, next) => {
  const status = error.status || HttpStatus.INTERNAL_SERVER_ERROR;
  const body =
    status !== HttpStatus.INTERNAL_SERVER_ERROR
      ? { message: error.message }
      : { message: 'Internal Server Error' };

  response.status(status).json(body);
};

module.exports = errorHandler;
