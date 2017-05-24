angular
    .module('<%= scriptAppName %>')
    .filter('<%= cameledName %>', <%= classedName %>);

/* @ngInject */
function <%= classedName %>() {
    return (input) => {
        return `MyFilter filter: ${input}`;
    };
}
