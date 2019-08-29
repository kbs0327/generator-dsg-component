import template from './<%= name %>.html';
<%= moduleUtil.makeDeclareTemplate(scriptAppName) %>
  .config(Config);

/* @ngInject */
function Config($routeProvider) {
  $routeProvider
    .when('<%= route %>', {
      template,
      controller: '<%= classedName %>Ctrl'
    });
}
