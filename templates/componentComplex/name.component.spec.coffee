'use strict'

describe 'Component: <%= cameledName %>', ->

    # load the component's module and view
    beforeEach module '<%= scriptAppName %>'
    $componentController = undefined
    beforeEach inject (_$componentController_) ->
        $componentController = _$componentController_;

    it 'should expose a `hero` object', inject ($compile) ->
        bindings = {item: {name: 'Hello'}};
        ctrl = $componentController('<%= cameledName %>', null, bindings);

        expect(ctrl.item).toBeDefined();
        expect(ctrl.item.name).toBe 'Hello';
