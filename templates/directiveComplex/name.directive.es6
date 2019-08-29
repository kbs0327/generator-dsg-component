import template from './<%= name %>.html';
<%= moduleUtil.makeDeclareTemplate(scriptAppName) %>
  .directive('<%= cameledName %>', <%= classedName %>Directive);

/* @ngInject */
function <%= classedName %>Directive() {
  return {
    template,
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
