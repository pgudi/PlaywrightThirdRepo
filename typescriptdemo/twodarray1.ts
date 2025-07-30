
let arr1:number[][]=[[1,2,3],[4,5,6],[7,8,9]]
//Read Elements from the 2D Array
let data:string=""
for(let i:number=0;i<arr1.length;i++){
    for(let j:number=0;j<arr1[i].length;j++){
        data+=arr1[i][j]+" ";
        
    }
    data+="\n"
}

console.log(data);
