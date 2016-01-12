'use strict';

//TODO::angular app model
var app = angular.module('mainApp', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider, $locationProvider) {
    var routeRoleCheck = {
        admin: {
            auth: function (mvAuth) {
                return mvAuth.auth('admin');
            }
        }
    };

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/',
            {
                templateUrl:'/partials/main/Main',
                controller:'MainCtrl'
            }
        )
        .when('/admin/user',
            {
                templateUrl:'/partials/admin/users-list',
                controller:'mvUserListCtrl',
                resolve:routeRoleCheck.admin
            }
        );
});

app.run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        if(rejection === 'not authorised'){
            $location.path('/');
        }
    })
});