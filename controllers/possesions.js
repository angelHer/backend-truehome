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

function getPossesions(req, res) {
  conection.connect(function(err) {
      if (err) {
          res.status(500).send({message: 'Error de conexion'});
          return;
      }
      //Select all customers and return the result object:
      var sql = `SELECT propiedad.id AS id_propiedad, propiedad.address AS addres_propiedad, propiedad.image, propiedad.price,
        propietario.name, propietario.address AS addres_propietario, propietario.email, propietario.telephone
        FROM propiedad
        INNER JOIN propietario ON propiedad.id_propietario=propietario.id`;
      conection.query(sql, function (err, result, fields) {
          if (err) {
              res.status(500).send({message: 'Error de consulta'});
              return;
          }

          res.send({
              message: 'success',
              rows: result
          });

          conection.end();
      });
  });
}

function updatePossesion(req, res) {
  var possessionId = req.params.id;
  var update = req.body;

  conection.connect(function(err) {
      if(err) {
          res.status(500).send({message: 'Error de conexion'});
          return;
      }

      var sql = "UPDATE propiedad SET address = ?, price = ? WHERE id = ?";

      conection.query(sql, [update.address, update.price, possessionId],function (err, result) {
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
  testPossesions,
  getPossesions,
  updatePossesion
}
