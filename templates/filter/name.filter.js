(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .filter('<%= cameledName %>', <%= classedName %>);

  function <%= classedName %>() {
    return function (input) {
      return '<%= classedName %> filter: ' + input;
    };
  }

})();
