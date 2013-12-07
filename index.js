module.exports = nerl;

function nerl() { }

var declaredDirectives = {},
    compileProvider;

nerl.directive = function (preferredName, directiveFactory) {
  declaredDirectives[preferredName] = directiveFactory;
  registerDirective(preferredName);

  return directiveFactory;
};

nerl.bindDirectives = function (module) {
  module.config(function($compileProvider) {
    compileProvider = $compileProvider;
    Object.keys(declaredDirectives).forEach(function (directiveName) {
      registerDirective(directiveName);
    });
  });
};

function registerDirective(directiveName) {
  if (compileProvider) {
    compileProvider.directive(directiveName, declaredDirectives[directiveName]);
  }
}
