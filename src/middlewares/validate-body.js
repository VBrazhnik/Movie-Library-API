const BadRequestError = require('../errors/bad-request-error');

const validateBody = schema => {
  return function({ body }, response, next) {
    const { error } = schema.validate(body, { convert: false });
    if (error) {
      throw new BadRequestError(error.message);
    }

    next();
  };
};

module.exports = validateBody;
