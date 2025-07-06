class Student{
    constructor(rollno,firstname){
        this.rollno=rollno
        this.firstname=firstname
    }

    showRollNumber(){
        console.log("Roll Number of Student :"+this.rollno);
        
    }

    showFirstName(){
        console.log("First Name of Student :"+this.firstname);
    }

    displayCourse(coursename){
        console.log("Course Name of Student :"+coursename);
        
    }
}

module.exports = Student