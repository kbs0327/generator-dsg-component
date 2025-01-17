describe('Directive: <%= cameledName %>', () => {
  // load the directive's module and view
  beforeEach(module('<%= moduleUtil.findModuleRealName(scriptAppName) %>'));
  //beforeEach(module('<%= htmlUrl %>'));

  let element, scope;

  beforeEach(inject(($rootScope) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(($compile) => {
    element = angular.element('<<%= _.dasherize(name) %>></<%= _.dasherize(name) %>>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the <%= cameledName %> directive');
  }));
});
