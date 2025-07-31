/*
    Case 2: how to assign value to class variables
    solution : using constructor
*/
var Library3 = /** @class */ (function () {
    function Library3(bid, bname, author) {
        this.bookid = bid;
        this.bookName = bname;
        this.author = author;
    }
    Library3.prototype.display = function () {
        console.log(this.bookid);
        console.log(this.bookName);
        console.log(this.author);
    };
    return Library3;
}());
var o4 = new Library3(1122, 'Oracle SQL', 'Tech soft');
o4.display();
