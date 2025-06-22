/*
    Classes in JavaScript

    class is a Template, 
    It contains details in the form proeprties and functions.
    Based on object we can access the proeprties and functions
    case 2: if class contains only functions
*/

class Student{

    showName(name){
        console.log("Name of Student :"+name)
    }

    displayCourseName(cname)
    {
        console.log("Course Name :"+cname);
        
    }
}

let o = new Student()
o.showName("Vinith")

o.displayCourseName("Playwright Automation")