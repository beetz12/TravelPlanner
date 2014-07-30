'use strict';

/* Controllers */

  myApp.controller('DestListCtrl', function ($scope, $location, destData, notifier, toastr){

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

/*myApp.controller('DestEditCtrl', function($scope, $route, $location, destData){

    $route.current.locals.dest.get().then(function (myDest){
        $scope.dest = myDest;
    });

    $scope.SaveDest = function(){
        if(form.$valid) {
            console.log(dest);
            //destData.save(dest);
            $scope.dest.put().then(function() {
                $location.path('/');
            });
        }
    }

    $scope.CancelEdit = function(){
        $location.path('/');
    }


});*/

myApp.controller('DestEditCtrl', function($scope, $route, $location, Restangular, dest){

    var original = dest;
    $scope.dest = Restangular.copy(original);
    //dest.get().then(function (myDest){
        var original = dest;
        $scope.dest = Restangular.copy(original);
    //});
    console.log('foo');
    //console.log(dest);




    $scope.SaveDest = function(){

            //console.log(dest);
            //destData.save(dest);
            $scope.dest.put().then(function() {
                $location.path('/');
            });

    }

    $scope.CancelEdit = function(){
        $location.path('/');
    }


});
