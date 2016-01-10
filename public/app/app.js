'use strict';

//TODO::angular app model
var app = angular.module('mainApp', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/',
            {
                templateUrl:'/partials/main/Main',
                controller:'MainCtrl'
            }
        );
});