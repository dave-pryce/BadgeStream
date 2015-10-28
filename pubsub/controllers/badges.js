'use strict';

var _ = require('underscore');
var model = require('../models/badges')

// Send badges to model
// next is a function done , move on to next.
exports.save = function(req, res, next){
  var badges = _.clone(req.body);
  model.save(badges, function(err){
      if(err) return res.json(503,{error: true});
      next();
  });
};

// send badges to pubsub
exports.send = function(){};
