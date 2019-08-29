<%= moduleUtil.makeDeclareTemplate(scriptAppName) %>
    .config(Config);

/* @ngInject */
function Config($provide) {
    $provide.decorator('<%= cameledName %>', ($delegate) => {
        // decorate the $delegate
        return $delegate;
    });
}
