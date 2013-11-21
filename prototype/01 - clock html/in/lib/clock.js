module.exports = Clock;

// explicitly associate Clock with clock.html template:
require('./nerl').bind(Clock, './clock.html');

function Clock() {
  var $ = this.initDom();

  setInterval(function () {
    var now = new Date();
    $.hours = now.getHours();
    $.minutes = now.getMinutes();
    $.seconds = now.getSeconds();
  }, 100);
}
