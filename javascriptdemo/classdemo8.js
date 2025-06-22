/*
    Classes in JavaScript

    class is a Template, 
    It contains details in the form proeprties and functions.
    Based on object we can access the proeprties and functions
    case 5: Constructor in class [Parametrized Constructor]
*/

class University
{
    constructor(uname, ulocation){
        this.uname =uname
        this.ulocation=ulocation
    }

    showAddress(){
        console.log("Address of University:"+this.ulocation)
    }

    showUniversityName(){
        console.log("University Name :"+this.uname)
    }
}

let o = new University("JSS University", "Mysore")
o.showAddress()
o.showUniversityName()


let o2 = new University("Rajivgandhi Medical University", "Bangalore")
o2.showAddress()
o2.showUniversityName()