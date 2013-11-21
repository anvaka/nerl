// this file should be an entry point to browserify command.

// every time when user clicks we want to create a new 'clock' component:
window.onclick = function () {
  var Clock = require('./lib/clock');
  var clock = new Clock();
  clock.appendTo(document.body);
}
