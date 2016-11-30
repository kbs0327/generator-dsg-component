# generator-dsg-component

> [Yeoman](http://yeoman.io) generator
> Following AngularJS Style Guide : [johnpapa guide](https://github.com/johnpapa/angularjs-styleguide)


## Getting Started

### Yeoman Generators

To install generator-dsg-component from npm, run:

```
$ npm install -g generator-dsg-component
```

Finally, initiate the generator:

```
$ yo dsg-component
```


## Generators

Available generators:

* Client Side
  - [dsg-component:route](#route)
  - [dsg-component:controller](#controller)
  - [dsg-component:filter](#filter)
  - [dsg-component:directive](#directive)
  - [dsg-component:service](#service)
  - [dsg-component:provider](#service)
  - [dsg-component:factory](#service)
  - [dsg-component:decorator](#decorator)

### Route
Generates a new route.

Example:
```bash
yo dsg-component:route myroute
[?] Where would you like to create this route? (client/app)
[?] What will the url of your route be? /myroute
```

Produces:

    client/app/myroute/myroute.js
    client/app/myroute/myroute.controller.js
    client/app/myroute/myroute.controller.spec.js
    client/app/myroute/myroute.html
    client/app/myroute/myroute.scss


### Controller
Generates a controller.

Example:
```bash
yo dsg-component:controller user
[?] Where would you like to create this controller? (client/app)
```

Produces:

    client/app/user/user.controller.js
    client/app/user/user.controller.spec.js

### Directive
Generates a directive.

Example:
```bash
yo dsg-component:directive myDirective
[?] Where would you like to create this directive? (client/app)
[?] Does this directive need an external html file? Yes
```

Produces:

    client/app/myDirective/myDirective.directive.js
    client/app/myDirective/myDirective.directive.spec.js
    client/app/myDirective/myDirective.html
    client/app/myDirective/myDirective.scss

**Simple directive without an html file**

Example:
```bash
yo dsg-component:directive simple
[?] Where would you like to create this directive? (client/app)
[?] Does this directive need an external html file? No
```

Produces:

    client/app/simple/simple.directive.js
    client/app/simple/simple.directive.spec.js

### Filter
Generates a filter.

Example:
```bash
yo dsg-component:filter myFilter
[?] Where would you like to create this filter? (client/app)
```

Produces:

    client/app/myFilter/myFilter.filter.js
    client/app/myFilter/myFilter.filter.spec.js

### Service
Generates an AngularJS service.

Example:
```bash
yo dsg-component:service myService
[?] Where would you like to create this service? (client/app)
```

Produces:

    client/app/myService/myService.service.js
    client/app/myService/myService.service.spec.js

### Decorator
Generates an AngularJS service decorator.

Example:
```bash
yo dsg-component:decorator serviceName
[?] Where would you like to create this decorator? (client/app)
```

Produces

    client/app/serviceName/serviceName.decorator.js

## License

MIT
