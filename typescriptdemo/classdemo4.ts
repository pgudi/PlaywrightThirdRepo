/*
    perform Export of this class
*/
export class Product
{
    pid:number;
    prodName:string;
    price:number;
    quantity:string;

    constructor(pid:number,prodName:string,price:number,quantity:string)
    {
        this.pid=pid
        this.prodName=prodName
        this.price=price
        this.quantity=quantity
    }

    showProductName():void{
        console.log("Product Name :"+this.prodName);
        
    }

    showPrice():void{
       console.log("Product Price :"+this.price); 
    }

    showQunatity():void{
        console.log("Product qunatity :"+this.quantity); 
    }
}