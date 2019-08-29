import template from './<%= name %>.html';
<%= moduleUtil.makeDeclareTemplate(scriptAppName) %>
  .config(Config);

/* @ngInject */
function Config($stateProvider) {
  $stateProvider
    .state('<%= name %>', {
      url: '<%= route %>',
      template,
      controller: '<%= classedName %>Ctrl'
    });
}
