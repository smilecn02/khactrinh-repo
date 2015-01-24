/// <reference path="angular.min.js" />

//(function () {
//    var app = angular.module('MyApp', ['ng-Route']);

//    app.controller('HomeController', function ($scope) {
//        $scope.Message = "Yahoooo! we have successfully done our first part.";
//    });
//})();


(function () {
    var app = angular.module('MyApp2', []);
    app.controller('HomeController', function ($scope) {
        $scope.Message = "Hello";
    })
})();

var MyApp = angular.module('MyApp', []);

MyApp.controller('MyController', function MyController($scope) {
    $scope.author = {
        'name': 'Khac Trinh',
        'title': 'Software Developer',
        'company': 'WorkBook'
    }
});

