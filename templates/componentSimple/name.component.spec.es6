//FIXME
'use strict';

describe('Component: <%= cameledName %>', function () {

    // load the component's module and view
    beforeEach(module('<%= scriptAppName %>'));
    //beforeEach(module('<%= htmlUrl %>'));

    var $componentController;

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should expose a `hero` object', function () {
        // Here we are passing actual bindings to the component
        var bindings = {item: {name: 'Hello'}};
        var ctrl = $componentController('<%= cameledName %>', null, bindings);

        expect(ctrl.item).toBeDefined();
        expect(ctrl.item.name).toBe('Hello');
    });

});
