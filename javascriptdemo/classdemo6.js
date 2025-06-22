/*
   import Custoemr class and 
   Execute all members of Custoemr class
*/

let Customer = require('./classdemo5')

let o = new Customer()
console.log(o.customerName)
console.log(o.productName)
console.log(o.price)
console.log(o.getDiscount())
o.getCustomerAddress("1st Phase 4th Stage Penya Bangalore")