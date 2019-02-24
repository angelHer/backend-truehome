'use strict'

var app = require('./app');
var port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log("Server started | Listen port 5500");
});
