// A command line application for generating power of
// * two from 2^0 through 2^32

for (var x = 1, i = 0; i <= 32; i += 1) {
  // console.log(x);
  console.log('2^%d = %d', i, x);
  x += x;
}
