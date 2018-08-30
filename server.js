// server.js
const http = require('http');

const fs = require('fs');

const url = require('url');

/* get from env. var PORT
   e.g. to set on exec: [terminal]$ PORT=4001 node server.js
   or default 3001
 */
var server_port = process.env.PORT || 3002;

var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(express.static('articles'));

// http://expressjs.com/en/starter/basic-routing.html
// at home page, serve index.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

app.get("/api/article", function(request, response) {

  var baseURI = url.parse(request.url, true);

  // /api/article?id=1 -> query: { id: '1' }
  console.log(baseURI);
  request.queryParams = baseURI.query;
  var article_id = request.queryParams.id;

  var md_path = __dirname + `/articles/article${article_id}.md`;
  fs.readFile(md_path, 'utf-8', (err, data) => {

    console.log(data);
    response.writeHead(200, {'Content-type': 'text/html'});

    var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text  = data,
    html  = converter.makeHtml(text);

    response.end(html);

    // text  = '# hello, markdown!'
    // response.end('<h1>Hello Router</h1>');
    // response.sendFile(__dirname + '/articles/article1.md');
  });


});

// listen for requests
var listener = app.listen(server_port, function () {
  console.log('[INFO]: Your app is listening on port ' + server_port);
});
