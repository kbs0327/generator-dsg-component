(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .config(Config);

  function Config($provide) {
    $provide.decorator('<%= cameledName %>', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  }

})();