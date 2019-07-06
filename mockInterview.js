// How would you remove duplicates in array
// Given array of integers

// O(n^2) => for(i), for(j) => splice
// [1,1,2,2,3,4]

// in the case of multiples more than 2 we can use a map
// map => {1: 2, 2: 3, 3:1, 4:1}

function removeDuplicates(arr){ // => O(n)
    let i = 0; //O(1)
    let j = 1;  //O(1)
    //let nArr = [];

    while (i <= arr.length - 2) { //O(n)
        if (arr[i] === arr[j]) { //O(1)
            console.log("if:" + arr);
            arr.splice(i,1);
            arr.splice(j-1,1);
            i = 0;
            j = 1;
        } else if (arr[i] != arr[j] && j != arr.length - 1) { //O(1)
            console.log("elif:" + arr);
            j++;
        } else {  //O(1)
            console.log("else:" + arr);
            i++;
            j = i + 1;
        }
    }
    return arr;
}

console.log(removeDuplicates([1,1,2,2,3,4]));
console.log(removeDuplicates([10,4,8,2,2,3,4]));