module.exports = require('nerl').directive('alert', function () {
  return {
    restrict:'EA',
    transclude:true,
    replace:true,
    scope: {
      type: '=',
      close: '&'
    },
    link: function(scope, iElement, iAttrs) {
      scope.closeable = "close" in iAttrs;
    },
    // Browserify plugin should convert
    //   templateUrl:'alert.html',
    // and inline template text:
    template: "<div class='alert' ng-class='type && \"alert-\" + type'>\
    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\
    <div ng-transclude></div>\
</div>"
  };
});
