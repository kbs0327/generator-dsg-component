(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', <%= classedName %>Drtv);

  function <%= classedName %>Drtv() {
    return {
      templateUrl: '<%= htmlUrl %>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();