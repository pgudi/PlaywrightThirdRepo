/*
    function provides reusability of the code
    it means write one time and call multiple times
    functions are broadly grouped in to two types
    1. functiosn which do not return value
    2. functions which return value
*/
// functions which do not return value
//traditional functions approach, to find factorial of a given number
function findFactorial1(num) {
    var fact = 1;
    for (var i = num; i >= 1; i--) {
        fact = fact * i;
    }
    console.log("Factorial of " + num + " is " + fact);
}
findFactorial1(5);
//anonymous  functions approach, to find factorial of a given number
var findFactorial2 = function (num) {
    var fact = 1;
    for (var i = num; i >= 1; i--) {
        fact = fact * i;
    }
    console.log("Factorial of " + num + " is " + fact);
};
findFactorial2(6);
//array  functions approach, to find factorial of a given number
var findFactorial3 = function (num) {
    var fact = 1;
    for (var i = num; i >= 1; i--) {
        fact = fact * i;
    }
    console.log("Factorial of " + num + " is " + fact);
};
findFactorial3(7);
