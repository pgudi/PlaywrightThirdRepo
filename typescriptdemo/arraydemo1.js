/*
   It stores multiple elements,
   index starts with sero here and stores size-1 elements
   two types of Array:
   1. 1D array
   2. 2D array
*/
//One dimentional Array
var arr = [10, 20, 30, 40, 50];
console.log(arr);
//Read Elements with Looping
console.log(arr[0]);
console.log(arr[1]);
console.log("-----------------------");
//Read Elements using for Loop
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("-----------------------");
//Read Elements using for of loop
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val);
}
console.log("-----------------------");
//Read Elements using for in loop
for (var val in arr) {
    console.log(arr[val]);
}
