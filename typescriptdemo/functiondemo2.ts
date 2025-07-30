/* functiosn which return value
Rules for return keyword
 1. Never use retrun keyword in body of looping statement
 2. function can return only one value at a time
 3. as per coding standard, 
 try to avoid using multiple return stateemnts in a function
*/
// prime number
function isPrime(num:number):boolean {
    let flag:number=0
    let status:boolean
    for(let i:number=2;i<num;i++){
        if(num % i ==0){
            flag+=1
            break
        }
    }

    if (flag==0){
        status=true
    }else{
        status= false
    }
    return status
}
let val:boolean = isPrime(13)
console.log("whether it is a prime number:"+val);

// display prime numebrs i nbetween 1 to 50
for(let i:number=1;i<=50;i++){
    if(isPrime(i)==true){
        console.log(i);
        
    }
}

