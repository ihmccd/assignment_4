(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['menuitems'];
  function MenuItemsController(menuitems) {
    var menuitemsCtrl = this;
    menuitemsCtrl.menuitems = menuitems;
  }

})();
