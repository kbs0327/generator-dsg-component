(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', <%= classedName %>Drtv);

  function <%= classedName %>Drtv() {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the <%= cameledName %> directive');
      }
    };
  }

})();