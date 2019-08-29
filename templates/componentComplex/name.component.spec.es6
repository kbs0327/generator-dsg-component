describe('Component: <%= cameledName %>', () => {
  // load the component's module and view
  beforeEach(module('<%= moduleUtil.findModuleRealName(scriptAppName) %>'));

  let $componentController;

  beforeEach(inject(_$componentController_ => {
    $componentController = _$componentController_;
  }));

  it('should expose a `hero` object', () => {
    // Here we are passing actual bindings to the component
    const bindings = {item: {name: 'Hello'}};
    const ctrl = $componentController('<%= cameledName %>', null, bindings);

    expect(ctrl.item).toBeDefined();
    expect(ctrl.item.name).toBe('Hello');
  });
});
