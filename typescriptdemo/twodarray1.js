var arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//Read Elements from the 2D Array
var data = "";
for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1[i].length; j++) {
        data += arr1[i][j] + " ";
    }
    data += "\n";
}
console.log(data);
