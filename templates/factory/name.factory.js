(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .factory('<%= cameledName %>', <%= classedName %>);

  /* @ngInject */
  function <%= classedName %>() {
    // Service logic
    // ...

    var meaningOfLife = 99;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  }

})();