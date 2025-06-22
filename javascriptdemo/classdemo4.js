/*
    Classes in JavaScript

    class is a Template, 
    It contains details in the form proeprties and functions.
    Based on object we can access the proeprties and functions
    case 3: if class contains proeprties and  functions
*/

class Student{
    countryName="India"

    get cityName(){
        return "Bangalore"
    }

    showName(name){
        console.log("Name of Student :"+name)
    }

    displayCourseName(cname)
    {
        console.log("Course Name :"+cname);
        
    }
}

let o = new Student()
console.log(o.cityName)
console.log(o.countryName)
o.showName("Srinivasa")
o.displayCourseName("Sociology")