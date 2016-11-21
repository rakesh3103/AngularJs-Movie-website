/**
 * Created by Rakesh M on 23-Aug-16.
 */

var mongoose = require('mongoose');

var TodoSchema =  new mongoose.Schema({
    Title: String,
    Year: String,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Metascore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbID: String,
    Type: String,
    tomatoMeter: String,
    tomatoImage: String,
    tomatoRating: String,
    tomatoReviews: String,
    tomatoFresh: String,
    tomatoRotten: String,
    tomatoConsensus: String,
    tomatoUserMeter: String,
    tomatoUserRating: String,
    tomatoUserReviews: String,
    tomatoURL: String,
    DVD: String,
    BoxOffice: String,
    Production: String,
    Website: String,
    Response: String,
    Watched : Boolean




});

module.exports = mongoose.model('moviescollections', TodoSchema);
