'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var possesions_routes = require('./routes/possesions');
var propietary_routes = require('./routes/propietary');

//middlewares de body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-COntrol-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas base
app.use('/api', possesions_routes);
app.use('/api', propietary_routes);

module.exports = app;
