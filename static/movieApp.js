/**
 * Created by Rakesh M on 24-Aug-16.
 */
/**

 */
var app = angular.module('movieApp', ['ngRoute']);
console.log("In app");
app.config(function ($routeProvider) {
    console.log("In route provider");
    $routeProvider
        .when('/', {
            controller: 'mainController',
            templateUrl: '/partials/main.html'


        })
        .when('/movieDetail',{
            controller: 'detailController',
            templateUrl : '/partials/detail.html'
        });

});

app.factory('Data', function(){
    return{};
});

