
const Student = require('./studentclass')

class Library extends Student{
    constructor(bookname){
        super(101, "Santosh")
        this.bookname=bookname
    }

    showBookName(){
        console.log("Book Name :"+this.bookname);
        
    }
}

let o = new Library("JavaScript Programming book")
o.showBookName()
o.showRollNumber()
o.showFirstName()
o.displayCourse("Computers")