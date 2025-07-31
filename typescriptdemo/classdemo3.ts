/*
    Case 2: how to assign value to class variables
    solution : using constructor
*/
class Library3
{
    bookid:number;
    bookName:string;
    author:string;
    constructor(bid:number, bname:string, author:string)
    {
        this.bookid=bid
        this.bookName=bname
        this.author=author

    }

    display():void{
        console.log(this.bookid)
        console.log(this.bookName)
        console.log(this.author)
    }
}

let o4=new Library3(1122,'Oracle SQL','Tech soft')
o4.display()