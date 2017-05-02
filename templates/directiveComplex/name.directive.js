(function () {

    'use strict';

    angular
        .module('<%= scriptAppName %>')
        .directive('<%= cameledName %>', <%= classedName %>Directive);

    /* @ngInject */
    function <%= classedName %>Directive() {
        return {
            templateUrl: '<%= htmlUrl %>',
            restrict: 'EA',
            controller: <%= classedName %>,
            link: postLink
        };

        function postLink(scope, element, attrs) {
          //TODO IMPLEMENTS
        }
    }

    /* @ngInject */
    function <%= classedName %>() {
        //TODO IMPLEMENTS
    }

})();
