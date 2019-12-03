// this script a file and reproduces new file, replacing with r and l with w

// RUN:
// node readwrite.js greeting.txt

var fs = require('fs');

if (process.argv.length !== 3) {
  console.error('Exactly one argument required');
  process.exit(1);
}

var input = process.argv[2];
var output = input + '.w';

fs.readFile(input, 'utf-8', function(err, text) {
  if (err) throw err;
  var chaal = text.replace(/[r]/g, 'w').replace(/[RL]/g, 'W');
  fs.writeFile(output, chaal, function(err) {
    if (err) throw err;
  });
});
