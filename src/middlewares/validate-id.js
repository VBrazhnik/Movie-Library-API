const ObjectId = require('mongoose').Types.ObjectId;
const BadRequestError = require('../errors/bad-request-error');

const validateId = (request, response, next, id) => {
  if (!ObjectId.isValid(id)) {
    throw new BadRequestError('The ID is not valid');
  }

  next();
};

module.exports = validateId;
