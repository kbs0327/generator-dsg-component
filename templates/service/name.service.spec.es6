describe('Service: <%= cameledName %>', () => {
    'use strict';

    // load the service's module
    beforeEach(module('<%= scriptAppName %>'));

    // instantiate service
    let <%= cameledName %>;
    beforeEach(inject((_<%= cameledName %>_) => {
        <%= cameledName %> = _<%= cameledName %>_;
    }));

    it('should do something', () => {
        expect(!!<%= cameledName %>).toBe(true);
    });

});
