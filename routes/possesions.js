'use strict'

var express = require('express');
var possesionsController = require('../controllers/possesions');

var api = express.Router();

api.get('/test-possesions', possesionsController.testPossesions);
api.get('/possesions', possesionsController.getPossesions);
api.post('/possesions/:id', possesionsController.updatePossesion);

module.exports = api;