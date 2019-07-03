function mergeSortedArrays(arr1, arr2){
    let newArr = [];
    let i = 0;
    let j = 0;
    while (arr1[i] || arr2[j] || arr1[i] == arr2[j] == 0){ // this last OR check is needed because arr[i]==0 does not return true?
        console.log("ree")
        if (arr1[i] < arr2[j] || !arr2[j]){
            console.log(3);
            newArr.push(arr1[i]);
            ++i;
        } else {
            newArr.push(arr2[j]);
            ++j;
        }
    }
    return newArr;
}

//console.log(mergeSortedArrays([0,3,4,31],[4,6,30]));
console.log(mergeSortedArrays([0,3,4,31],[]));
