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
}

/* @ngInject */
function <%= classedName %>() {
    //TODO IMPLEMENTS
}

function postLink(scope, element, attrs) {
    //TODO IMPLEMENTS
}
