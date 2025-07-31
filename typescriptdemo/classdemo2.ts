/*
    Case 2: how to assign value to class variables
    solution : using method
*/
class Library2
{
    bookid:number;
    bookName:string;
    author:string;

    setDetails():void{
        this.bookid=1202
        this.bookName="Playwright" 
        this.author="Complete Reference"
    }

    displayDetails():void{
        console.log(this.bookid+"  "+this.bookName+"  "+this.author);
        
    }
}

let o2=new Library2();
o2.setDetails()
o2.displayDetails()