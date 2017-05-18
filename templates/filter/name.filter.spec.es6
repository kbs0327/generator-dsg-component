describe('Filter: <%= cameledName %>', () => {
  'use strict';

    // load the filter's module
    beforeEach(module('<%= scriptAppName %>'));

    // initialize a new instance of the filter before each test
    var <%= cameledName %>;
    beforeEach(inject(($filter) => {
        <%= cameledName %> = $filter('<%= cameledName %>');
    }));

    it('should return the input prefixed with "<%= cameledName %> filter:"', () => {
        var text = 'angularjs';
        expect(<%= cameledName %>(text)).toBe('<%= cameledName %> filter: ' + text);
    });

});