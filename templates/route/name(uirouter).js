(function () {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .config(Config);

  function Config($stateProvider) {
    $stateProvider
      .state('<%= name %>', {
        url: '<%= route %>',
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Ctrl'
      });
  }
  
})();