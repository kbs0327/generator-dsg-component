<%= moduleUtil.makeDeclareTemplate(scriptAppName) %>
    .filter('<%= cameledName %>', <%= classedName %>);

/* @ngInject */
function <%= classedName %>() {
  return (input) => {
    return '<%= classedName %> filter: ' + input;
  };
}
