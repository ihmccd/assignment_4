(function () {
'use strict';
angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')

MenuDataService.$inject=['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath){
	var service=this;
	service.getAllCategories = function(){

		return $http({
      method: "GET",
      url:  (ApiBasePath+'/categories.json')/*'https://davids-restaurant.herokuapp.com/categories.json'*/
			/*(ApiBasePath+'/categories.json')*/
    }).then(function(response){
			console.log(response.data)
		return response.data;
	});
}

	service.getItemsForCategory = function (shortname) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: shortname
        }
      }).then(function (response) {
				
        return response.data.menu_items;
      });
    }

}

})();
