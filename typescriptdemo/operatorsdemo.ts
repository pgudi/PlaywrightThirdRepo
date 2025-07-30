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
let z:number=40
let y:number=20
let result:number=(z + y)
console.log("Addition Result:"+result);

//Relational Operator  and Logical Operators
let x1:number=45
let x2:number=100
let res:boolean=(x1<=x2 && x2>=x1)
console.log(res);

//Arithmetic Assignment Operators
let k:number=10
k=k+100
console.log(k);


