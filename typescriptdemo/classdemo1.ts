/*
    Case 1: how to assign value to class variables
    solution : using object we can assign
*/
class Library
{
    bookid:number;
    bookName:string;
    author:string;

}
let o=new Library()
o.bookid=1101
o.bookName="Core Java";
o.author="Balaguru swamy"
console.log(o.bookid, o.bookName, o.author);
