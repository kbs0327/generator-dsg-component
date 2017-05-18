describe('Component: <%= cameledName %>', () => {
    'use strict';

    // load the component's module and view
    beforeEach(module('<%= scriptAppName %>'));
    //beforeEach(module('<%= htmlUrl %>'));

    let $componentController;

    beforeEach(inject((_$componentController_) => {
        $componentController = _$componentController_;
    }));

    it('should expose a `hero` object', () => {
        // Here we are passing actual bindings to the component
        let bindings = {item: {name: 'Hello'}};
        let ctrl = $componentController('<%= cameledName %>', null, bindings);

        expect(ctrl.item).toBeDefined();
        expect(ctrl.item.name).toBe('Hello');
    });

});
