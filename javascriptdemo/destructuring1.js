/*
    Destructuring on Objects
*/

let employee={
    "Ename":"Santosh",
    "JobName":"Manager",
    "Salary":25000,
    "cityName":"Dallas"
}
let {Ename, JobName, Salary, cityName} = employee
console.log(Ename, JobName, Salary, cityName)



/*
    Destructuring of Array
*/
let flowers =["Sunflower","Lotus","Tulip","Cosmos","Lavendar"]
let [x1,x2,x3,x4] = flowers
console.log(x1,x2,x3,x4);

//Second Approach using rest operator
let [a1,a2,,,a5]=flowers
console.log(a1,a2,a5);

//Third Approach
let [b1,b2,...rest] = flowers
console.log(b1,b2);
console.log(rest);

// Write a program to swap two variable values
var fname ="Santosh"
var lname ="Gudi"
var [lname, fname] = [fname, lname]
console.log("LastName :"+lname, "First Name :"+fname)

// Destructuing on String
let s1="WELCOME"
let [v1,v2,...rest1] = s1
console.log(v1,v2);
console.log(rest1);

