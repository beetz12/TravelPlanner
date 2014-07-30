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
        //$routeProvider.otherwise({redirectTo: '/destinations'});
        $locationProvider.html5Mode(true);
        RestangularProvider.setBaseUrl('http://localhost:3000/');
    });


/*

 .config(function($routeProvider, RestangularProvider) {
 $routeProvider.when('/view1', {templateUrl: 'resources/bower/angular-seed/app/partials/partial1.html', controller: 'MyCtrl1'});
 $routeProvider.when('/view2', {templateUrl: 'resources/bower/angular-seed/app/partials/partial2.html', controller: 'MyCtrl2'});
 $routeProvider.otherwise({redirectTo: '/index.html'});
 RestangularProvider.setBaseUrl('/data');
 });
 */

/*
var myApp = angular.module('myApp', ['restangular'])
    .config(function(RestangularProvider) {
        RestangularProvider.setBaseUrl('/api');
    });

myApp.controller('IndexCtrl', function($scope, Restangular) {
    $scope.people = Restangular.all('person').getList();
});
*/