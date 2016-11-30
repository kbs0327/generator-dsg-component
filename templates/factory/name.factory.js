(function() {

    'use strict';

    angular
        .module('<%= scriptAppName %>')
        .factory('<%= cameledName %>', <%= classedName %>);

    /* @ngInject */
    function <%= classedName %>() {
        // Service logic
        // ...

        var meaningOfLife = 99,  meaningOfLife1 = 99;

        // Public API here
        return {
            someMethod: someMethod,
            someMethod1: someMethod1
        };

        // Public API Implements
        function someMethod(){
          return meaningOfLife;
        }

        function someMethod1(){
            return meaningOfLife1;
        }
    }

})();
