describe('Factory: <%= cameledName %>', () => {

    // load the service's module
    beforeEach(module('<%= scriptAppName %>'));

    // instantiate service
    var <%= cameledName %>;
    beforeEach(inject(function (_<%= cameledName %>_) {
        <%= cameledName %> = _<%= cameledName %>_;
    }));

    it('should do something', () => {
        expect(!!<%= cameledName %>).toBe(true);
    });

});
