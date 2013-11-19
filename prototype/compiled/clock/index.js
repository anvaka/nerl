module.exports = Clock;

// explicitly associate Clock with clock.html template:
require('./nerl').bind(Clock, './clock.html');

function Clock() {
  var dom = this.initDom();

  setInterval(function () {
    var now = new Date();
    dom.hours = now.getHours();
    dom.minutes = now.getMinutes();
    dom.seconds = now.getSeconds();
  }, 1000);
}
