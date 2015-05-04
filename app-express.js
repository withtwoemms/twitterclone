var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.status(200).send('Hello World! -- you have resolved an ExpressJS endpoint');
});

app.listen(8888);
