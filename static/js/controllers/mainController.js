/**
 * Created by Rakesh M on 24-Aug-16.
 */
app.controller('mainController', function($scope,$location, Data, $http) {
    console.log("In Main Controller");
    getMovies();
    function getMovies() {
        $scope.numberWatched =0;
        $scope.numberUnWatched =0;
        $http.get("/movies")
            .success(function (response) {
                //console.log("Response: " +JSON.stringify(response));
                if (response.length === 0) {
                    $scope.noData = true;
                    //alert("noData: " + $scope.noData);
                }
                $scope.movieList = response;
                //console.log("In Main Controller");
                //console.log("resources: " + JSON.stringify($scope.resources));
                angular.forEach($scope.movieList, function(x){
                    if (x.Watched){
                        $scope.numberWatched ++;
                    }else{
                        $scope.numberUnWatched ++;
                    }
                });
            });
    }


    $scope.movieName = "";
    $scope.movieYear="";

    $scope.movieSubmit = function (){
        //alert("Movie Submitted: " + $scope.movieName );
        $http.post('/movies', {"movie": $scope.movieName, "year" : $scope.movieYear}).then(successCallback, errorCallback);
    };
    function successCallback(response){
        console.log("Post successful");
        $scope.movieName = "";
        $scope.movieYear = "";
        //console.log("Response: " + JSON.stringify(response));
        if(response.status == 200){
            if(response.data.Response == "True"){
                getMovies();
            }else{
                alert("Could Not Add Movie: " + response.data.Error);
            }
        }


        //alert("Post successful");
        //$scope.successFlag = true;
        //$timeout(reset, 3000);

    }
    function errorCallback(){
        console.log("Post failed");
        //alert("Post failed");
        //$scope.failureFlag = true;
        //$timeout(reset, 3000);
    }
    function reset(){
        $scope.successFlag = false;
        $scope.failureFlag = false;
    }

    $scope.delete = function(id){
        //alert("In Delete: " + id );
        $http.delete("movies/" + id)
            .then(getMovies());

    }

    $scope.movieInfo = function(movie){
        //alert("In movie Info: " + movie );
        Data.movie = movie;
        $location.path("/movieDetail");
    }

    $scope.watchedChange = function(movie){
        //alert("Movie changed " + movie._id + "New Status" + movie.Watched);
        if(movie.Watched){
            $scope.numberWatched++;
            $scope.numberUnWatched--;
        }else{
            $scope.numberWatched--;
            $scope.numberUnWatched++;
        }
        $http.put("movies/" + movie._id, {"Watched" : movie.Watched}).then(console.log("Change Successful"));
    }

    });