'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
myApp.value('version', '0.1');
myApp.value('toastr', toastr);
  
myApp.factory('destData', function($location, Restangular){
    return {
        getDest: function(destID) {
            return Restangular.one('destinations', destID);
        },
        getAllDests: function() {
            return Restangular.all('destinations');
        }
    };
});


myApp.factory('notifier', function(toastr) {
    return {
        notifySuccess: function(msg) {
            toastr.success(msg);
            console.log(msg);
        },
        notifyInfo: function(msg){
            toastr.info(msg);
            console.log(info);
        }

    }
})
