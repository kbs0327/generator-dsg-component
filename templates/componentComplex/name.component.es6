import './<%= name %>.html';
<%= moduleUtil.makeDeclareTemplate(scriptAppName) %>
    .component('<%= cameledName %>', {
        template,
        controller: <%= classedName %>,
        bindings: {
            item: '<'
        }
    });

/* @ngInject */
function <%= classedName %>() {
    const $ctrl = this;

    //PreDefined Callback;

    this.$onInit = () => {
    };

    this.$onChanges = changes => {
      $ctrl.item === changes.item.currentValue;
    };

    this.$onDestroy = () => {
    };

    //TODO IMPLEMENTS

}
