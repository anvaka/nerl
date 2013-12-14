Using angular.js directives from npm
====================================

This example shows how to use angular.js custom directive from npm. (See also: npm alert directive [source code](https://github.com/anvaka/ag.alert)).

# Quick start

From terminal:
```
npm install
npm start
```

This will start a demo website, which uses `alert` directive from [Bootstrap](http://angular-ui.github.io/bootstrap/#/alert) family.

# How it works?

HTML markup for custom alerts [is no different](https://github.com/anvaka/nerl/blob/master/prototype/01.using%20angular%20package/index.html#L10-L13) from normal angular application:
``` html
<div ng-controller="AlertDemoCtrl">
  <alert ng-repeat="alert in alerts" type="alert.type" close="closeAlert($index)">{{alert.msg}}</alert>
  <button class='btn' ng-click="addAlert()">Add Alert</button>
</div>
```

We [require ag.alert](https://github.com/anvaka/nerl/blob/master/prototype/01.using%20angular%20package/alertDemoController.js#L3-L5) package from npm to make it reachable for browserify:
``` js
require('ag.alert');
```

Finally we [associate](https://github.com/anvaka/nerl/blob/master/prototype/01.using%20angular%20package/app.js#L6-L7) all reachable directives with running angular application (this needs to be done only once):
``` js
require('nerl').bindDirectives(app);
// this call will associate all loaded npm directives with your angular
// application (here app = angular.module('alertDemo', []));
```

# Lower level explanation

When developing angular applciations normally you would do something like this:
``` js
// This creates a new module "ui.bootstrap.alert" and puts "alert" directive in it.
angular.module("ui.bootstrap.alert", []).directive('alert', function () { /* .. */ });

// Later, during application bootstrap we add a dependency to module
// with custom directives:
angular.module("myApp", ["ui.bootstrap.alert"]);
// now html compiler knows how to treat 'alert' directive.
```

With npm, we are trying to limit interactions with angular modules. NPM packages already are perfect units for code isolation and reuse. Thus when you declare a new directive all (ideally) you need to do is export it :

``` js
module.exports = function () {
  return {
    templateUrl:'alert.html',
    // ...
  };
});
```

We still need to somehow make a connection between npm and angular. To do so [nerl](https://github.com/anvaka/nerl) provides a simple API to track registered directives and their names:

``` js
module.exports = require('nerl').directive('alert', function () {
  return {
    templateUrl:'alert.html',
    // ...
  };
});
```

When angular application is bootstrapped it requests `nerl` to register all collected dependencies with current application:

``` js
require('nerl').bindDirectives(angular.module('myApp'));
```
