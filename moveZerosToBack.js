function moveZerosToBack(arr){
    var j = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i]!=0 ){
           if(i!=j){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
    return arr;
}

console.log(moveZerosToBack([2,1,0,4,0,0,3]));
console.log(moveZerosToBack([0,0,2,1,0,4,0,0,3]));