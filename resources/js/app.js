'use strict';

var myApp = angular.module('myApp', ['ngResource','ngGrid','ngRoute','restangular'])
    .config(function($routeProvider, $locationProvider, RestangularProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/partials/destList.html',
                controller: 'DestListCtrl'
            })
            .when('/destination/:destinationID',
            {
                templateUrl: '/partials/destEdit.html',
                controller: 'DestEditCtrl',
                resolve: {
                    dest: function($route, destData) {
                        var destID = $route.current.pathParams.destinationID;
                        return destData.getDest(destID).get();
                    }
                }
            })
            .otherwise({redirectTo:'/'});
        $locationProvider.html5Mode(true);
        RestangularProvider.setBaseUrl('http://localhost:3000/');
    });

