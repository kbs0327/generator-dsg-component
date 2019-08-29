<%= moduleUtil.makeDeclareTemplate(scriptAppName) %>
  .factory('<%= cameledName %>', <%= classedName %>);

/* @ngInject */
function <%= classedName %>() {
  // Service logic
  // ...

  const meaningOfLife = 99;

  // Public API here
  return {
    someMethod
  };

  // Public API Implements
  function someMethod() {
    return meaningOfLife;
  }
}
