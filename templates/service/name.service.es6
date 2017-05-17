(() => {

    'use strict';

    angular
        .module('<%= scriptAppName %>')
        .service('<%= cameledName %>', <%= classedName %>);

    /* @ngInject */
    function <%= classedName %>() {
        this.hi = () => {
            return 'hi';
        };
    }

})();
