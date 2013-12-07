'use strict';

var app = angular.module('alertDemo', [])
  .controller('AlertDemoCtrl', require('./alertDemoController'));

// Bind all directives to this angularjs application:
require('nerl').bindDirectives(app);
