(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: '/templates/home.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: '/templates/categories.template.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categories.menuitems', {
     url: '/{shortname}/menuitems',
     templateUrl: 'templates/menuitems.template.html',
     controller: 'MenuItemsController as menuitemsCtrl',
     resolve: {
       menuitems: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
         return MenuDataService.getItemsForCategory($stateParams.shortname);
       }]
     }
});



  // Item detail


}

})();
