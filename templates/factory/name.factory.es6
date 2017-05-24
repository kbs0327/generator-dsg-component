    angular
        .module('<%= scriptAppName %>')
        .factory('<%= cameledName %>', <%= classedName %>);

    /* @ngInject */
    function <%= classedName %>() {
        // Service logic
        // ...

        let meaningOfLife = 99;

        // Public API here
        return {
            someMethod
        };

        // Public API Implements
        function someMethod() {
            return meaningOfLife;
        }
    }
