/*
    In JavaScript objects represents "key and value pair"
    Here keys always should unique but values can be duplicate
*/

//Nested of objects

let employees ={
    "santu":{
        "firstName":"Santosh",
        "jobName" :"Manager",
        "age" : 21
    },

    "vinu":{
        "firstName":"Vinith",
        "jobName" :"Analyst",
        "age" : 25
    }
}
//How to Read the value from Array of Object
console.log(employees.santu.firstName);
console.log(employees.santu.jobName);
console.log(employees.santu.age);
console.log(employees.vinu.firstName);
console.log(employees.vinu.jobName);
console.log(employees.vinu.age);
