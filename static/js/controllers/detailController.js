/**
 * Created by Rakesh M on 24-Aug-16.
 */
app.controller('detailController', function($scope,$location,$rootScope,Data, $http){
    console.log("In Detail Controller");
    //alert("In Detail Controller" + Data.test);
    $scope.detailMovie = Data.movie;

    console.log("detailMovie" + $scope.detailMovie + "Data Movie: " + Data.movie);
    if($scope.detailMovie == null){
        $location.path('/');
    }

    $scope.back = function(){
        $location.path('/');
    }
});
