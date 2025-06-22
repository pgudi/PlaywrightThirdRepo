/*
    In JavaScript objects represents "key and value pair"
    Here keys always should unique but values can be duplicate
*/

//Example 1 : JavaScript Objects, how read key and value pair
let employee={
    "Ename":"Santosh",
    "JobName":"Manager",
    "Salary":25000,
    "cityName":"Dallas"
}
// REad only Keys
for(let x in employee){
    console.log(x);
    
}
//Read only Values
for(let x1 in employee){
    console.log(employee[x1]);
    
}
//REad Key and Value together
for(let x2 in employee){
    console.log(x2+"  --> "+employee[x2]);
    
}