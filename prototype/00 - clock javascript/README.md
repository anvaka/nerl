Clock component
---------------

This example shows how to write a clock component, which can be shared on npm.
Clock shows current time in HH:MM:SS format, and updates itself every second.

# How to add clock to the page from javascript?

``` js
  var Clock = require('./lib/clock');
  var clock = new Clock();
  clock.appendTo(document.body);
```

# How Clock is built?

Clock has a little html markup inside `clock.html`:

``` html
  <span id="hours"></span>
  <span>:</span>
  <span id="minutes"></span>
  <span>:</span>
  <span id="seconds"></span><br />
```

And a little logic to update current time:

``` js
  // note: this is a common js module:
  module.exports = Clock;

  // Explicitly associate Clock with clock.html template:
  require('nerl').bind(Clock, './clock.html');

  function Clock() {
    var $ = this.initDom();

    setInterval(function () {
      var now = new Date();
      $.hours = now.getHours();
      $.minutes = now.getMinutes();
      $.seconds = now.getSeconds();
    }, 100);
  }
```

HTML template and javascript logic is glued together with `bind()` method.
Once you done this `Clock` inherits useful methods like `initDom()` which will
create an interface to your HTML markup. Also does it inherit `appendTo()` method
which will append clock's markup to the parent dom element.
