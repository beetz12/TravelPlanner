'use strict';

/* Controllers */

  myApp.controller('DestListCtrl', function ($scope, $location, destData, notifier){

      destData.getAllDests().getList().then(function (destList)
      {
          $scope.travelDest = destList;
      });

      $scope.gridOptions = { data: 'travelDest',
          columnDefs: [{ field: 'name', displayName: 'Name', width: "200px", resizable: false},
              { field: 'description', displayName: 'Description', width: "*" }],
          multiSelect: false, selectedItems: []};

      $scope.EditClick = function (rows){
          if(!rows || rows.length < 1){
              alert('at least 1 row must be selected');
          } else {
              $location.path('/destination/' + rows[0].id);
          }
      };

      $scope.notifierTest = function(){
          notifier.notify('You have been notified');
      };

  });


myApp.controller('DestEditCtrl', function($scope, $route, $location, Restangular, notifier, dest){

    var original = dest;
    $scope.dest = Restangular.copy(original);

    var original = dest;
    $scope.dest = Restangular.copy(original);


    $scope.SaveDest = function(){


    $scope.dest.put().then(function() {
        $location.path('/');
    });

    }

    $scope.CancelEdit = function(){
        $location.path('/');
        notifier.notifyInfo('Edit Cancelled.')
    }

});
