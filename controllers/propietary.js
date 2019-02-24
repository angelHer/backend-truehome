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

function testPropietary(req, res) {
    res.send({
        message: 'Propietary OK!'
    });
}

function updatePropietary(req, res) {
  var propietaryId = req.params.id;
  var update = req.body;

  conection.connect(function(err) {
      if(err) {
          res.status(500).send({message: 'Error de conexion'});
          return;
      }

      var sql = "UPDATE propietario SET name = ?, address = ?, email = ?, telephone = ? WHERE id = ?";

      conection.query(sql, [update.name, update.address, update.email, update.telephone, propietaryId],function (err, result) {
          if (err) {
              res.status(500).send({message: 'Update error'});
              return;
          }

          res.send({
              message: 'Success'
          });

      });
      conection.end();
  });
}

module.exports = {
  testPropietary,
  updatePropietary
}
