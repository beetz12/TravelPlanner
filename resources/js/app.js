'use strict';


var myApp = angular.module('myApp', [
    'ngResource',
    'ngGrid',
    'restangular'])
    .config(function(RestangularProvider) {
        RestangularProvider.setBaseUrl('/data');
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