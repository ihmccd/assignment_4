
(function () {
'use strict';

angular.module('MenuApp')
.component('dataCategories', {
  template: 'templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
