/*
var express = require('express');
var router = express.Router();

//var mongoose = require('mongoose');
var Movies = require('../models/Movies.js');


*/
/* GET home page. *//*

router.get('/', function(req, res, next) {
  // res.render('./index.html');
  // res.render('index', { title: 'Express' });




  //Movies.create({"name" : "Jake"});


  Movies.find(function (err, moviescollections) {
    if (err) return next(err);

    res.json(moviescollections);
    //console.log(moviescollections);
  });
});

module.exports = router;
*/
