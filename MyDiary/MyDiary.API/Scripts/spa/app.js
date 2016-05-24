(function () {
    'use strict';

    angular.module('diary', ['common.core', 'common.ui'])
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "Scripts/spa/home/index.html",
                controller: "indexCtrl"
            })
            .when("/login", {
                templateUrl: "Scripts/spa/account/login.html",
                controller: "loginCtrl"
            })
            .when("/register", {
                templateUrl: "Scripts/spa/account/register.html",
                controller: "registerCtrl"
            })
            .when("/diaries", {
                templateUrl: "Scripts/spa/customers/customers.html",
                controller: "customersCtrl"
            })
            .otherwise({ redirectTo: "/" });
    }

})();