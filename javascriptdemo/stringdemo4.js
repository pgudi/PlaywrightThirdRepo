/*
   String Functions in JavaScript
*/
// indexof function -> search from left to right
let s1="It is a book, It is on table"
console.log("Position of first 'is' :"+s1.indexOf("is"))
console.log("Position of Second 'is' :"+s1.indexOf("is",4))

// lastindexOf function -> Search from right to left
let s2="It is a book, It is on table"
console.log("Position of first 'is' :"+s1.lastIndexOf("is"))
console.log("Position of Second 'is' :"+s1.lastIndexOf("is",16))

// padStart and padEnd Functions
let s3="JavaScript"
console.log("Padding Left :"+s3.padStart(15,"#"))
console.log("Padding Right :"+s3.padEnd(15,"#"))

//ValueOf  converting other datatypes to String
let s4 = "Mango";
console.log("Value of Result :"+s4.valueOf());

//trim function
let s5="   Welcome   "
console.log("Before Trim Start :"+s5.length);
console.log("After Trim Start :"+s5.trimStart().length);
console.log("After Trim End :"+s5.trimEnd().length);
console.log("Trim Result:"+s5.trim().length);

// single Quote and Double quote for String
let x='Bangalore is "garden" city'
console.log(x);

let y="Bangalore is 'garden' city"
console.log(y);

let z="Bangalore is \"garden\" city"
console.log(z);

let w=`"Bangalore is 'garden' city"`
console.log(w);

