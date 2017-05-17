//FIXME
(function () {

    'use strict';

    angular
        .module('<%= scriptAppName %>')
        .component('<%= cameledName %>', {
            template: '<div></div>',
            controller: <%= classedName %>,
            bindings: {
                item: '<'
            }
        });

    /* @ngInject */
    function <%= classedName %>() {
        var $ctrl = this;

        //PreDefined Callback;

        this.$onInit = function () {
        };

        this.$onChanges = function (changes) {
            $ctrl.item === changes.item.currentValue;
        };

        this.$onDestroy = function () {
        };

        //TODO IMPLEMENTS

    }

})();
