//server.js
// var http = require('http');
var getInfo = require('./info.js');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(getInfo(0));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)
});
// http.createServer(
//
// function onRequest(request, response) {
//   response.writeHead(200, {'Content-type': 'text/plain'});
//   response.write(getInfo(1));
//   response.end();
// }).listen(8080);
