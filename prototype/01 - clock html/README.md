Clock component - Declarative
-----------------------------

This example shows how to instantiate Clock component from html. Component
itself is distributed via npm.

Clock shows current time in HH:MM:SS format, and updates itself every second.

# How to add clock to html page?

This is is your `index.html`
``` html
  <html>
  <head>
    <title>Create clock from markup</title>
  </head>
  <body>
    Current time is: <require './lib/clock' />
  </body>
  </html>
```

# How Clock is built?

After a special compiler is executed all `require` tags are inlined into
html and corresponding javascript logic is attach to parts of DOM.

``` html
  <html>
  <head>
    <title>Create clock from markup</title>
  </head>
  <body>
    Current time is: <span id="hours"></span>
  <span>:</span>
  <span id="minutes"></span>
  <span>:</span>
  <span id="seconds"></span><br />

    <script src="main.bundle.js" charset="utf-8"></script>
  </body>
  </html>
```

Javascript logic to instantiate `Clock` component on behalf of use resides in
`main.bundle.js`. Uniquely identify which part of generated markup corresponds
to component's template might be challenging, but not impossible.

One way to do this could be recording an xpath to inlined component and associating
this xpath with a component constructor. E.g.:

``` js
(function (attachTo) {
  for (var path in attachTo) {
    if (attachTo.hasOwnProperty(path)) {
      var ConstructorMethod = attachTo[path];
      ConstructorMethod.initAt(path);
    }
  }
})({
  'body > span:nth-child(1)': require('./lib/clock')
});
```
