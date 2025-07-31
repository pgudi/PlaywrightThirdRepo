"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
/*
    perform Export of this class
*/
var Product = /** @class */ (function () {
    function Product(pid, prodName, price, quantity) {
        this.pid = pid;
        this.prodName = prodName;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.showProductName = function () {
        console.log("Product Name :" + this.prodName);
    };
    Product.prototype.showPrice = function () {
        console.log("Product Price :" + this.price);
    };
    Product.prototype.showQunatity = function () {
        console.log("Product qunatity :" + this.quantity);
    };
    return Product;
}());
exports.Product = Product;
