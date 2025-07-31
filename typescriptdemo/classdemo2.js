/*
    Case 2: how to assign value to class variables
    solution : using method
*/
var Library2 = /** @class */ (function () {
    function Library2() {
    }
    Library2.prototype.setDetails = function () {
        this.bookid = 1202;
        this.bookName = "Playwright";
        this.author = "Complete Reference";
    };
    Library2.prototype.displayDetails = function () {
        console.log(this.bookid + "  " + this.bookName + "  " + this.author);
    };
    return Library2;
}());
var o2 = new Library2();
o2.setDetails();
o2.displayDetails();
