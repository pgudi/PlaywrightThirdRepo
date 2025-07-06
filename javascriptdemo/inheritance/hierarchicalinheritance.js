/*
   Hierarchical Inheritance
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

class Maths3 extends Maths1{
    multiplication(x,y){
        console.log("Multiplication Result :"+(x*y));
    }
}

let o2=new Maths2()
o2.addition(40,80)
o2.substraction(35,20)

let o = new Maths3()
o.addition(30,40)
o.multiplication(13,10)