/**
 * Created by Rakesh M on 24-Aug-16.
 */
var express = require('express');
var router = express.Router();

//var mongoose = require('mongoose');
var Movies = require('../models/Movies.js');
 var movieList = [];
//var moviescollections = [{"Title" :  "Rakesh"}];
Movies.find().distinct('Title', function(err, movieNames){
    if (err) return next(err);
    movieList = movieNames;
   // console.log("ids: " + movieNames);
});









/* GET home page. */
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

router.post('/', function(req, res, next) {
    //debugger;
    // console.log("in POST " + req.body.name);
    /*User.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });*/

    console.log("In POST: " + req.body);
    var http = require('http');
    var url = "http://www.omdbapi.com/?t="+req.body.movie+"&y="+req.body.year+"&tomatoes=true";
    console.log("URL: " + url);
    var data = '';
    var movieData = '';

    http.request(url, function(response){
        response.on('data', function(chunk){
            data = data + chunk;
            //console.log("In request " + data);
        });

        response.on('end', function(){
            //console.log("In end " + data);



            //console.log("In end " + JSON.parse(data).Title);
            movieData = JSON.parse(data);
            if(movieList.indexOf(movieData.Title) != -1){
                console.log("Movie Already Exist");
                res.json({"Response" : "False", "Error" : "Movie Already Exists!"})
            }else{
            movieData.Watched = false;
            //Movies.create(movieData);
            if(movieData.Response == "True"){
                if(movieData.Poster == "N/A"){
                    movieData.Poster = "http://cdn.amctheatres.com/Media/Default/Images/noposter.jpg";
                }
                //console.log("Poster: " + movieData.Poster);
            Movies.create(movieData, function (err, post) {
                if (err) return next(err);
                movieList.push(post.Title);
                //console.log("Movie List: " + movieList);
                res.json(post);
            })}
            else{
                res.json(movieData);
            }}
        });

    }).end();


});


router.delete('/:id', function(req, res, next) {
    Movies.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        //console.log("In Delete: " + post);
        movieList.splice(movieList.indexOf(post.Title));
        //console.log("In Delete List: " + movieList);
        res.json(post);
    });
});

router.put('/:id', function(req, res, next) {
    Movies.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
module.exports = router;

