(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .filter('<%= classedName %>', <%= classedName %>);

  function <%= classedName %>() {
    return function (input) {
      return '<%= classedName %> filter: ' + input;
    };
  }

})();
