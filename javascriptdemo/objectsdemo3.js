/*
    In JavaScript objects represents "key and value pair"
    Here keys always should unique but values can be duplicate
*/

//Array of objects

let employees =[
    {
        "firstName":"Santosh",
        "jobName" :"Manager",
        "age" : 21
    },
    {
        "firstName":"Vinith",
        "jobName" :"Analyst",
        "age" : 25
    }
]
//How to Read the value from Array of Object
console.log(employees[0].firstName);
console.log(employees[0].jobName);
console.log(employees[0].age);
console.log(employees[1].firstName);
console.log(employees[1].jobName);
console.log(employees[1].age);
