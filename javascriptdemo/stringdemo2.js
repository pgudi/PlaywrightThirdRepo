/*
   String Functions in JavaScript
*/

//Partial Matching of String/ Existance of the String
let s1="Bangalore is a garden city"
console.log("Starts with :"+s1.startsWith("Bangalore"));
console.log("Contains/Includes :"+s1.includes("garden"));
console.log("Ends with :"+s1.endsWith("city"));

// Extract substring or characters from the given String
let s2="Welcome to JavaScript"
console.log("Extract Character :"+s2.charAt(0));

let s3="Programming"
console.log("Extract String :"+s3.substring(3,7));

// Slice Function
let a1="Programming"
console.log("Slice Result :"+a1.slice(3,7));


// Split the String with delimeter
let s4="Mango,Apple,Orange,Banana";
let s=s4.split(",")
for(let v1 of s){
    console.log(v1);
    
}

//split with no delimeter
let s5="Children are playing in playground"
let arr=s5.split(" ")
for(let v2 of arr){
    console.log(v2);
    
}