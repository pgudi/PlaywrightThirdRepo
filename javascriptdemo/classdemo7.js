/*
    Classes in JavaScript

    class is a Template, 
    It contains details in the form proeprties and functions.
    Based on object we can access the proeprties and functions
    case 5: Constructor in class [No Args Constructor]
*/

class University
{
    constructor(){
        this.uname ="VTU University"
        this.ulocation="Belguam"
    }

    showAddress(){
        console.log("Address of University:"+this.ulocation)
    }

    showUniversityName(){
        console.log("University Name :"+this.uname)
    }
}

let o = new University()
o.showAddress()
o.showUniversityName()


let o2 = new University()
o2.showAddress()
o2.showUniversityName()