'use strict';

var express = require('express');
var app = express();

// middleware
app.use(express.json());

app.post('/', function(request, response){
  response.send('hello world');
});

app.listen(8000);
