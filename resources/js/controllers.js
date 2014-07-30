'use strict';

/* Controllers */

  myApp.controller('DestListCtrl', function ($scope, $location, travelDest){
  	$scope.myData = travelDest.getList().then(function (destList)
      {
          $scope.travelDest = destList[0];
      });

      $scope.gridOptions = { data: 'travelDest',
          columnDefs: [{ field: 'name', displayName: 'Name', width: "200px", resizable: false},
              { field: 'description', displayName: 'Description', width: "*" }],
          multiSelect: false, selectedItems: []};

      $scope.EditClick = function (rows){
          console.log('edit clicked');
          if(!rows || rows.length < 1){
              alert('at least 1 row must be selected');
          } else {
              $location.path('/destination/' + rows[0].id);
          }
      };

  });

myApp.controller('DestEditCtrl', function($scope, $route){
    $scope.dest = {"name": "canada", "description": "french speaking country"};
    console.log($route.current.foo);
});
