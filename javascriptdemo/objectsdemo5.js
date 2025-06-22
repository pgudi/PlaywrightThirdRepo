/*
    In JavaScript objects represents "key and value pair"
    provide function as a value
*/

let employee ={
    "firstName":"Santosh",
    "lastName":"Gudi",
    "Salary":25000,
    fullName: function()
    {
        return (this.firstName+" "+this.lastName)
    },
    bonus: function()
    {
        return (this.Salary * 10 /100);
    }
}

// How to Execute the Functions
console.log(employee.fullName());
console.log(employee.bonus());