const HttpStatus = require('http-status-codes');
const HttpError = require('./http-error');

class BadRequestError extends HttpError {
  constructor(message) {
    super(HttpStatus.BAD_REQUEST, message);
    this.name = 'BadRequestError';
  }
}

module.exports = BadRequestError;
