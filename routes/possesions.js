'use strict'

var express = require('express');
var possesionsController = require('../controllers/possesions');

var api = express.Router();

api.get('/test-possesions', possesionsController.testPossesions);

module.exports = api;