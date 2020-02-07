const express = require('express');
const asyncHandler = require('express-async-handler');
const controller = require('../controllers');
const validateId = require('../middlewares/validate-id');
const validateBody = require('../middlewares/validate-body');
const createMovieSchema = require('../schemas/create-movie');
const updateMovieSchema = require('../schemas/update-movie');
const errorHandler = require('../middlewares/error-handler');

const router = express.Router();

router.param('id', validateId);

router.get('/', asyncHandler(controller.findAll));

router.post('/', validateBody(createMovieSchema));
router.post('/', asyncHandler(controller.create));

router.get('/:id', asyncHandler(controller.find));

router.put('/:id', validateBody(updateMovieSchema));
router.put('/:id', asyncHandler(controller.update));

router.delete('/:id', asyncHandler(controller.remove));

router.use(errorHandler);

module.exports = router;
