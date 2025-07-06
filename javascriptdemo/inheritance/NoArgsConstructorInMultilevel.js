/*
  In multilevel inheritance each class is having no -args constructor
*/

class AA{
    constructor(){
        console.log("It is AA class constructor");
        
    }
}

class BB extends AA{
    constructor(){
        super()
        console.log("It is BB class constructor");
        
    }
}

class CC extends BB{
    constructor(){
        super()
        console.log("It is CC class constructor");
        
    }
}

let o = new CC()
