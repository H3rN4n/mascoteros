'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	path = require('path'),
	mongoose = require('mongoose'),
	Pet = mongoose.model('Pet'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a pet
 */
exports.create = function(req, res) {
	var pet = new Pet(req.body);
	pet.user = req.user;

	pet.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(pet);
		}
	});
};

/**
 * Show the current pet
 */
exports.read = function(req, res) {
	res.json(req.pet);
};

/**
 * Update a pet
 */
exports.update = function(req, res) {
	var pet = req.pet;

	pet.title = req.body.title;
	pet.content = req.body.content;

	pet.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(pet);
		}
	});
};

/**
 * Delete an pet
 */
exports.delete = function(req, res) {
	var pet = req.pet;

	pet.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(pet);
		}
	});
};

/**
 * List of Pet
 */
exports.list = function(req, res) {
	Pet.find().sort('-created').populate('user', 'displayName').exec(function(err, pets) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(pets);
		}
	});
};

/**
 * Pet middleware
 */
exports.petByID = function(req, res, next, id) {
	Pet.findById(id).populate('user', 'displayName').exec(function(err, pet) {
		if (err) return next(err);
		if (!pet) return next(new Error('Failed to load pet ' + id));
		req.pet = pet;
		next();
	});
};