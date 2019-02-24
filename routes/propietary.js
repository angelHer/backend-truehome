'use strict'

var express = require('express');
var propietaryController = require('../controllers/propietary');

var api = express.Router();

api.get('/test-propietary', propietaryController.testPropietary);
api.post('/propietary/:id', propietaryController.updatePropietary);

module.exports = api;
