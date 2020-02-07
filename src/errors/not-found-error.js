const HttpStatus = require('http-status-codes');
const HttpError = require('./http-error');

class NotFoundError extends HttpError {
  constructor(message) {
    super(HttpStatus.NOT_FOUND, message);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;
