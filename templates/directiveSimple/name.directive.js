(function () {

    'use strict';

    angular
        .module('<%= scriptAppName %>')
        .directive('<%= cameledName %>', <%= classedName %>Directive);

    /* @ngInject */
    function <%= classedName %>Directive() {
        return {
            template: '<div></div>',
            restrict: 'EA',
            controller: <%= classedName %>,
            link: postLink
        };

        function postLink(scope, element, attrs) {
          //TODO IMPLEMENTS
          element.text('this is the <%= cameledName %> directive');
        }
    }

    /* @ngInject */
    function <%= classedName %>() {
        //TODO IMPLEMENTS
    }

})();
