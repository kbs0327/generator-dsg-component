(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', <%= classedName %>);

  /* @ngInject */
  function <%= classedName %>() {
    return {
      templateUrl: '<%= htmlUrl %>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();