(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .filter('<%= cameledName %>', <%= classedName %>);

  /* @ngInject */
  function <%= classedName %>() {
    return function (input) {
      return '<%= classedName %> filter: ' + input;
    };
  }

})();
