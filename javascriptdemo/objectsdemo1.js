/*
    In JavaScript objects represents "key and value pair"
    Here keys always should unique but values can be duplicate
*/
//Example 1 : JavaScript Object
let employee={
    "Ename":"Santosh",
    "JobName":"Manager",
    "Salary":25000,
}

//How to display Object
console.log(employee);
//How to display value based on key First Approach
console.log(employee.Ename);
//How to display value based on key Second Approach
console.log(employee["Ename"]);
//Modify Existing key value
employee.Salary=45000
console.log(employee.Salary);
//Add a new Key and Value Pair
employee.cityName="Dallas"
console.log(employee);
//Delete teh Key
delete employee.cityName
console.log("After Delete cityName Key:");
console.log(employee);
//Existance of particular key
console.log('Ename' in employee);


