/*
    Classes in JavaScript

    class is a Template, 
    It contains details in the form proeprties and functions.
    Based on object we can access the proeprties and functions
    case 4: How to export a class
*/

class Customer
{
    customerName = "Lenovo"
    productName = "Laptop"
    get price(){
        return 35000
    }

    getDiscount(){
        return (this.price * 5 / 100)
    }

    getCustomerAddress(address){
        console.log("Customer Address :"+address);
        
    }
}

module.exports = Customer