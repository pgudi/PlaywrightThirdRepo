/*
    Classes in JavaScript

    class is a Template, 
    It contains details in the form proeprties and functions.
    Based on object we can access the proeprties and functions
    case 2: if class contains only properties
*/
class Student
{
    firstName="Santosh"
    cityName="Dallas"

    get jobName(){
        return "Sales Architect"
    }

    get age(){
        return 21;
    }
}

let o = new Student()
console.log(o.firstName);
console.log(o.cityName);
console.log(o.jobName);
console.log(o.age);
