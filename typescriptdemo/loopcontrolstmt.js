/*
  loop contro lstatements includes
  1. break
  2. continue
  break: it terminates the whole loop
  continue: it skips the iterations

*/
//Example for break statement
var i = 10;
while (true) {
    console.log(i);
    if (i == 15) {
        break;
    }
    i = i + 1;
}
console.log("+++++++++++++++++++++++++++++++++++=");
//Example for continue statement
for (var j = 20; j <= 30; j++) {
    if (j == 24 || j === 26 || j == 28) {
        continue;
    }
    console.log(j);
}
