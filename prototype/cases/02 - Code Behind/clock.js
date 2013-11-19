module.exports = Clock;

function Clock(domRoot) {
  domRoot.on('inserted', start);
  domRoot.on('removed', stop);

  var timer;
  function start() {
    timer = setInterval(function () {
      var now = new Date();
      domRoot.hours = now.getHours();
      domRoot.minutes = now.getMinutes();
      domRoot.seconds = now.getSeconds();
    }, 1000);
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
}


Clock.prototype.getTime = function () {
  var domRoomt = this._domRoot;
  return domRoot.hours + ':' + domRoot.minutes + ':' + domRoot.seconds;
}
