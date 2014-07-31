'use strict';

/* Directives */


myApp.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

myApp.directive('resizable', function($window) {
    return function($scope) {
        $scope.initializeWindowSize = function() {
            var wHeight = $window.innerHeight;
            var result = 0;
            if(wHeight > 433){
                result = (wHeight - 383)*0.4;
            }
            console.log('result is: ' + result);
            return $scope.topMargin = result + 'px';
        };
        $scope.initializeWindowSize();
        return angular.element($window).bind('resize', function() {
            $scope.initializeWindowSize();
            return $scope.$apply();
        });
    };
});