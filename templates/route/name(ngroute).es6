angular
  .module('<%= scriptAppName %>')
  .config(Config);

/* @ngInject */
function Config($routeProvider) {
    $routeProvider
        .when('<%= route %>', {
            templateUrl: '<%= htmlUrl %>',
            controller: '<%= classedName %>Ctrl'
        });
}
