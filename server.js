// server.js

const http = require('http');

/* get from env. var PORT
   e.g. to set on exec: [terminal]$ PORT=4001 node server.js
   or default 3001
 */
var server_port = process.env.PORT || 3002;

var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
// at home page, serve index.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

// listen for requests
var listener = app.listen(server_port, function () {
  console.log('[INFO]: Your app is listening on port ' + server_port);
});
