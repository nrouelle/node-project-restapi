var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json([{name:"Projet 1", description:"Premier projet"}, {name:"Projet 2", description:"Second projet"}, {name:"Projet 3", description:"Troisième projet"}]);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});
module.exports = server;