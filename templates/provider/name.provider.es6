<%= moduleUtil.makeDeclareTemplate(scriptAppName) %>
  .provider('<%= cameledName %>', <%= classedName %>);

/* @ngInject */
function <%= classedName %>() {

  // Private variables
  let salutation = 'Hello';

  // Private constructor
  function Greeter() {
    this.greet = () => {
      return salutation;
    };
  }

  // Public API for configuration
  this.setSalutation = (s) => {
    salutation = s;
  };

  // Method for instantiating
  this.$get = () => {
    return new Greeter();
  };
}
