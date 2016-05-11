var a = 0, b = 1, f = 1, sum = 0;
for (f=1; f < 4000000; f++) {
  f = a + b;
  a = b;
  b = f;
  if (f%2 === 0){
    sum += f;
  }
  else {
    //nothing
  };
}
console.log(sum);
