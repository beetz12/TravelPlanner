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
            var divHeight = 410;
            var result = 0;
            if(wHeight > divHeight + 50){
                result = (wHeight - divHeight)*0.4;
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