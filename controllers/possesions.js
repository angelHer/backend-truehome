'use strict'

// Data Base
var mariaSql = require('mariasql');

var config = require('../config');
var conection = new mariaSql({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    db: config.database.db
});

function testPossesions(req, res) {
    res.send({
        message: 'Posessions OK!'
    });
}

module.exports = {
  testPossesions
}
