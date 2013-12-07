Using angular.js directives from npm
====================================

This example shows how to use angular.js custom directive from npm. (See also: [Authoring directives with npm](https://github.com/anvaka/nerl/tree/master/prototype/00.angular%20package%20-%20alert)).

# Quick start

From terminal:
```
npm install
npm start
```

This will start a demo website, which uses `alert` directive from [Bootstrap](http://angular-ui.github.io/bootstrap/#/alert) family.

# How it works?

Html markup for custom alerts is no different from how you normally use angular applications:
``` html
<div ng-controller="AlertDemoCtrl">
  <alert ng-repeat="alert in alerts" type="alert.type" close="closeAlert($index)">{{alert.msg}}</alert>
  <button class='btn' ng-click="addAlert()">Add Alert</button>
</div>
```

However `alert` directive is injected into angular application by simply [requiring ag.alert](https://github.com/anvaka/nerl/blob/master/prototype/01.using%20angular%20package/alertDemoController.js#L3-L5) package:
``` js
require('ag.alert');
```

Once we have required all custom directives we [associate](https://github.com/anvaka/nerl/blob/master/prototype/01.using%20angular%20package/app.js#L6-L7) them with currently running angular application (this needs to be done only once):
``` js
require('nerl').bindDirectives(app);
// this call will associate all loaded npm directives with your angular
// application (here app = angular.module('alertDemo', []));
```
