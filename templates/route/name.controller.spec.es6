describe('Controller: <%= classedName %>Ctrl', () => {
  // load the controller's module
  beforeEach(module('<%= moduleUtil.findModuleRealName(scriptAppName) %>'));

  let <%= classedName %>Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();
    <%= classedName %>Ctrl = $controller('<%= classedName %>Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', () => {
    expect(1).toEqual(1);
  });
});
