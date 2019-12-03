var LIMIT = 16;
var triangle = [];

for (var row = 0; row < LIMIT; row += 1) {
  triangle.push([]);
  for (var column = 0; column <= row; column += 1) {
    if (column === 0 || column === row) {
      triangle[row][column] = 1;
    } else {
      triangle[row][column] =
        triangle[row - 1][column - 1] + triangle[row - 1][column];
    }
  }
}

for (var row = 0; row < triangle.length; row += 1) {
  console.log(triangle[row].join(' '));
}
