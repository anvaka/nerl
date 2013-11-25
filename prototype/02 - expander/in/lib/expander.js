module.exports = Expander;

require('nerl').bind(Expander, './expander.html');

function Expander() {
  var component = this._initComponent();
  // default, no arguments = get default content
  var mainContent = component.getContent();
  var headerContent = component.getContent('header');

  mainContent.on('click', function () {
    var isShown = headerContent.style.display !== 'none';
    headerContent.style.display = isShown ? 'none' : 'block';
  });
}
