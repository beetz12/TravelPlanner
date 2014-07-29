'use strict';

/* Controllers */

  myApp.controller('TravelDestCtrl', function ($scope, travelDest){
  	$scope.myData = travelDest.getList().then(function (destList)
      {
          $scope.travelDest = destList[0];
      });

      $scope.gridOptions = { data: 'travelDest',
          columnDefs: [{ field: 'name', displayName: 'Name', width: "200px", resizable: false},
              { field: 'description', displayName: 'Description', width: "*" }]};

      $scope.EditClick = function (rows){
        if(!rows){
            console.log('at least 1 row must be selected');
            console.log(rows);
        }
          else if(rows.length > 1){
            console.log('only 1 row can be selected');
            console.log(rows);
        }
          else{
            alert('success');
            console.log(rows);
        }

      };

  });
