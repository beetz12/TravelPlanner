'use strict';

/* Controllers */

  myApp.controller('TravelDestCtrl', function ($scope, travelDest){
  	$scope.travelDest = travelDest.getList();
  	$scope.test = "blah";
  });
