'use strict';

var express = require('express');
var app = express();
var badges = require('./controllers/badges');

// middleware
app.use(express.json());

//app.post('/', function(request, response){
//  response.send('hello world');
//});

app.post('/', badges.save, badges.send, function(req,res){
  res.send('\ndone\n\n');
});


app.listen(8000);
