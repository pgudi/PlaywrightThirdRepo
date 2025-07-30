/*
  1. Arthemetic Operators:
  +     -   Addition
  -     -   substraction
  *     -   Multiplication
  /     -   Division
  %     -   Modulus

  2. Relational Operators
  >     -   Greater than
  >=    -   Greater than equal to
  <     -   Less than
  <=    -   Less than equal to
  ==    -   Eqaul to
  !=    -   Not Equal to
  ===   -   Exact Match

  3. Concatenationa Operator
  +     -    Concatenation
  If any one of operand is string then + acts as a Concatenation

  4. Assignment Operator
  =     -    Assignment operator

  5. Logical Operator
  &&    -   and operator
  A  B   A  &&  B
  0  0     0
  1  0     0
  0  1     0
  1  1     1

  ||    -    Or operator
  A  B   A  ||  B
  0  0     0
  1  0     1
  0  1     1
  1  1     1

  !     -   Not Operator
  A   !A
  0    1
  1    0

  6. Increment/ Decrement operator
  let i:number=10
  i++; => 11

  let j:number=10;
  j--; => 9

  7. Arithmetic Assignment Operators
  +=        -    Addition Arithmetic Assignment
  -=        -    substraction Arithmetic Assignment
  *=        -    Multiplication Arithmetic Assignment
  /=        -    Division Arithmetic Assignment
  %=        -    Modulus Arithmetic Assignment

  Example:
  let i:number=10
  i+=20; => 30
  or
  i=i+20; => 30
*/
// Example for Arithmetic Operators
var z = 40;
var y = 20;
var result = (z + y);
console.log("Addition Result:" + result);
//Relational Operator  and Logical Operators
var x1 = 45;
var x2 = 100;
var res = (x1 <= x2 && x2 >= x1);
console.log(res);
//Arithmetic Assignment Operators
var k = 10;
k = k + 100;
console.log(k);
