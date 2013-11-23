module.exports = Expander;

require('nerl').bind(Expander, './expander.html');

function Expander() {
  var $ = this.initDom();
  var mainContent = $.getContent();
  var headerContent = $.getContent('header');

}
