'use strict';

/* Controllers */

  myApp.controller('DestListCtrl', function ($scope, $location, destData, Restangular, notifier){

     /* destData.getAllDests().getList().then(function (destList)
      {
          console.log(destList);
          $scope.travelDest = destList;
      });*/


      $scope.travelDest = Restangular.all('destinations').getList().$object;
          //destData.getAllDests().getList().$object;

      console.log('updated info:');
      console.log($scope);
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
  });


myApp.controller('DestEditCtrl', function($scope, $route, $location, Restangular, notifier, dest){

    var original = dest;
    $scope.dest = Restangular.copy(original);


    $scope.SaveDest = function(){
        console.log($scope.dest);
        $scope.dest.patch($scope.dest);
        $location.url('/');
        notifier.notifySuccess('Destination Updated.')
    }

    $scope.destroy = function() {
        original.remove().then(function() {
            $location.path('/');
            $route.reload();
            notifier.notifyInfo('Destination Removed.')
        });
    };

    $scope.CancelEdit = function(){
        $location.path('/');
        notifier.notifyInfo('Edit Cancelled.')
    }

});
