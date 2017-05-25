describe('Filter: <%= cameledName %>', () => {
    'use strict';

    // load the filter's module
    beforeEach(module('<%= scriptAppName %>'));

    // initialize a new instance of the filter before each test
    let <%= cameledName %>;
    beforeEach(inject(($filter) => {
        <%= cameledName %> = $filter('<%= cameledName %>');
    }));

    it('should return the input prefixed with "<%= cameledName %> filter:"', () => {
        let text = 'angularjs';
        expect(<%= cameledName %>(text)).toBe('<%= cameledName %> filter: ' + text);
    });

});
