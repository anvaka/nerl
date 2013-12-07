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
    templateUrl:'alert.html'
  };
});
