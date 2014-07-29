'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
myApp.value('version', '0.1');
  


myApp.factory('travelDest', function(Restangular){
	return Restangular.all('destinations');
});
