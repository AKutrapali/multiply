module.exports = function multiply(first, second) {
  var a = first.split('').reverse();
  var b = second.split('').reverse();
  var c = [];

  for (var i=0; i<=a.length-1; i++) {
    for (var j=0; j<=b.length-1; j++) {
      c[i+j] = (c[i+j]) ? (c[i+j] + a[i] * b[j]) : a[i] * b[j];
  }}

  for (var n = 0; n <= c.length-1; n++) {
    if (c[n] >= 10) {
      var d = Math.floor(c[n] / 10);

      c[n] = c[n] % 10;
      c[n+1] = c[n+1] ? (c[n+1] + d) : d;
    }
  } 
  
  return c.reverse().join('');
}
