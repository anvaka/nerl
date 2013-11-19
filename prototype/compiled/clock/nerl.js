exports.bind = bind;

var utils = require('util'),
    fs = require('fs');

function bind(Child, templatePath) {
  utils.inherits(Child, BaseDomElement);
  // template is a 'static' property of a child class:
  Child.prototype.__htmlTemplate = fs.readFileSync(templatePath, 'utf8');
}

function BaseDomElement() {}

BaseDomElement.prototype.initDom = function () {
  return this.__domProxy = createDomProxy(this.__htmlTemplate);
};

BaseDomElement.prototype.appendTo = function (parent) {
  this.__domProxy.__appendTo(parent);
};

function createDomProxy(template) {
  var fakeContainer = document.createElement('div');
  fakeContainer.innerHTML = template;

  var children = Array.prototype.slice.call(fakeContainer.childNodes);

  var proxy = {
    __appendTo: function (parent) {
      for (var i = 0; i < children.length; ++i) {
        var child =children[i];
        augmentProxy(proxy, child);
        parent.appendChild(child);
      }
    }
  };

  return proxy;

  function augmentProxy(proxy, domElement) {
    if (domElement.id) {
      Object.defineProperty(proxy, domElement.id, {
        get: function () { return domElement.innerText; },
        set: function (value) { domElement.innerText = value; }
      });
    }
  }
}
