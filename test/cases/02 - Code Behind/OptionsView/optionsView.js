// this is 'code behind' for Settings component at http://www.yasiv.com/graphs

module.exports = LayoutView; // we export layout view here

// if we need validation, we can import it here:
var numberValidator = require('validator').Number;

function LayoutView(root) {
  // root will include all properties of html view. Since html view contained
  // `id` on some elements, they are accessible here. Let's set default values:
  root.springLength = 30;
  root.springCoeff = 0.8;

  // implement event handlers:
  root.resetToDefault = function () {
    // Setting values automatically updates view:
    root.springLength = 30;
    root.springCoeff = 0.8;
  }
}
