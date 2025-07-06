/*
   Multi level Inheritance
*/

class Maths1{
    addition(x,y){
        console.log("Addition Result :"+(x+y));
        
    }
}

class Maths2 extends Maths1{
    substraction(x,y){
        console.log("Substraction Result :"+(x-y));
    }
}

class Maths3 extends Maths2{
    multiplication(x,y){
        console.log("Multiplication Result :"+(x*y));
    }
}

let o = new Maths3()
o.addition(30,40)
o.substraction(50,30)
o.multiplication(13,10)