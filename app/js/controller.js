console.log("ALMOST EXECUTING CONTROLLER");
define(['app'], function (app) {
    app.controller('HomeController', ['$scope', function ($scope) {

    	console.log("EXECUTING CONTROLLER");

        $scope.title = "angularAMD";
        $scope.tofail = "gofail";
        console.log($scope.title);
    }]);
}); 
