(function () {
  'use strict';

  angular.module('MenuApp')
  .component('menuitems', {
    templateUrl: '/templates/menuitems.template.html',
    bindings: {
      menuitems: '<'
    }
  });
})();
