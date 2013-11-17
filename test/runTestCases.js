var test = require('tap').test,
    fs = require('fs'),
    path = require('path'),
    nerl = require('..');

test('Can run all test cases', function (t) {
  fs.readdir('./cases', function (err, path) {
    t.test(path, function (t) {
      runTestCase(t, path);
    });
  });

  function runTestCase(t, path) {
    nerl(path, function (result) {
      var expectedHtmlFileName = path.join(path, 'expected.index.html');
      if (fs.exists(expectedHtmlFileName)) {
        t.equal(result.html, fs.readFileSync(expectedHtmlFileName, 'utf8'), "Expected file matches results");
      }
      t.end();
    });
  }
});
