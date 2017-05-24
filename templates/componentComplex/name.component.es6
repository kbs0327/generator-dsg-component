angular
    .module('<%= scriptAppName %>')
    .component('<%= cameledName %>', {
        templateUrl: '<%= htmlUrl %>',
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

    this.$onChanges = (changes) => {
      $ctrl.item === changes.item.currentValue;
    };

    this.$onDestroy = () => {
    };

    //TODO IMPLEMENTS

}
